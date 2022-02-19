import axios from 'axios';

const baseURL = "https://thebetter.bsgroup.eu";

interface Token {
    Token: string,
    RefreshToken: string,
    TokenExpires: string
}

const getToken = () => {
    const token: Token = JSON.parse(localStorage.getItem('token') || '{}');
    return token.Token;
}

let isRefreshing = false;
let requests: any[] = [];

const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});

const updateToken = async () => {
    let token = JSON.parse(localStorage.getItem('token') || '{}');

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = {
        "Token": `${token.RefreshToken}`,
        "device": {
            "platformCode": "WEB",
            "Name": "4e5c1161-bcfd-4afc-826e-f1fa9fb0095b"
        }
    }

    try {
        const response = await axios.post(`${baseURL}/Authorization/RefreshToken`, JSON.stringify(body), config);
        let newToken = response.data.AuthorizationToken;
        return newToken;
    } catch (error) {
        localStorage.removeItem("token");
    }
}

axiosInstance.interceptors.request.use(async req => {
    req.headers!.Authorization = `Bearer ${getToken()}`;
    return req;
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.request.status === 401) {
            const config = error.config
            if (!isRefreshing) {
                isRefreshing = true;
                return updateToken().then(newAccessToken => {
                    localStorage.setItem('token', JSON.stringify(newAccessToken));
                    config.headers['Authorization'] = getToken();
                    // when token is fetched call all queued requests
                    requests.forEach(cb => cb());
                    requests = [];
                    return axiosInstance(config)
                }).catch(() => {

                }).finally(() => {
                    isRefreshing = false
                })
            } else {
                // add requests to queue
                return new Promise((resolve) => {
                    requests.push(() => {
                        let token = JSON.parse(localStorage.getItem('token') || '{}');
                        token = token ? token : null;
                        config.headers['Authorization'] = getToken()
                        resolve(axiosInstance(config))
                    })
                })
            }
        } else {
            return Promise.reject(error)
        }
    })

export default axiosInstance;