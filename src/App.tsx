// css
import './App.css';
// mui
// default routes
import { ProtectedRoutes } from './routes/defaultRoutes/defaultRoutes/protectedRoutes/ProtectedRoutes';
import { PageNotFound } from './routes/defaultRoutes/defaultRoutes/pageNotFound/PageNotFound';
// components
import { SignInPage } from './routes/signInPage/SignInPage';
import { Splash } from './routes/splashPage/Splash';
import { HomePage } from './routes/homePage/HomePage';
// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
