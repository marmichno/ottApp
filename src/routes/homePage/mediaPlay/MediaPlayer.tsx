import { StyledGrid } from "./MediaPlayerStyled"
// hooks
import { useAppSelector } from "../../../hooks/hooks"
// mui
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
// react player
import ReactPlayer from 'react-player'
// icons
import CloseIcon from '@mui/icons-material/Close';
// redux
import { useDispatch } from "react-redux";
// actions
import { closeMediaplayer } from "../../../redux/actions/media/mediaPlayInfo/mediaPlayInfoActions";

export const MediaPlayer = () => {

    const dispatch = useDispatch();
    const mediaPlayerState = useAppSelector(state => state.mediaPlayInfo);

    const checkIfObjectDontHaveContentUrl = () => {
        let response = mediaPlayerState.response;
        if(response !== null){
            let contentUrlExists = response.hasOwnProperty("ContentUrl");
            return !contentUrlExists;
        }
    }

    const renderSwitch = () => {
        if (mediaPlayerState.playerOpen) {
            if (mediaPlayerState.loading) {
                return (
                    <StyledGrid>
                        <Grid sx={{ width: "100%", height: "10%" }}>
                            <CloseIcon sx={{ height: 50, width: 50, marginLeft: 2, cursor: "pointer" }} onClick={() => dispatch(closeMediaplayer())} />
                        </Grid>
                        <Grid sx={{ width: "100%", height: "90%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography
                                variant="h4"
                                component="h4"
                            >
                                <CircularProgress />
                            </Typography>
                        </Grid>
                    </StyledGrid>
                )
            } else if (mediaPlayerState.error || checkIfObjectDontHaveContentUrl()) {
                return (
                    <StyledGrid>
                        <Grid sx={{ width: "100%", height: "10%" }}>
                            <CloseIcon sx={{ height: 50, width: 50, marginLeft: 2, cursor: "pointer" }} onClick={() => dispatch(closeMediaplayer())} />
                        </Grid>
                        <Grid sx={{ width: "100%", height: "90%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography
                                variant="h4"
                                component="h4"
                            >
                                {mediaPlayerState.error ? mediaPlayerState.error : "Video not available"}
                            </Typography>
                        </Grid>
                    </StyledGrid>
                )
            } else {
                return (
                    <StyledGrid>
                        <Grid sx={{ width: "100%", height: "10%" }}>
                            <CloseIcon sx={{ height: 50, width: 50, marginLeft: 2, cursor: "pointer" }} onClick={() => dispatch(closeMediaplayer())} />
                        </Grid>
                        <Grid sx={{ width: "100%", height: "90%" }}>
                            <ReactPlayer width={"100%"} height={"100%"} controls={true} url={mediaPlayerState.response !== null ? mediaPlayerState.response.ContentUrl : ""} />
                        </Grid>
                    </StyledGrid>
                )
            }
        } else {
            return null;
        }
    }

    return (
        <>
            {renderSwitch()}
        </>
    )
}