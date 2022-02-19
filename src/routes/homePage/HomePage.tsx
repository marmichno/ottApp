// hooks
import { useAppSelector } from "../../hooks/hooks"
import { useEffect } from "react";
// styled
import { StyledGrid, StyledErrorAndLoading } from "./StyledHomePage";
// components
import { MediaList } from "./mediaList/MediaList";
import { MediaPlayer } from "./mediaPlay/MediaPlayer";
// mui
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from "@mui/material";
// redux
import { useDispatch } from "react-redux";
// actions
import { postMediaList } from "../../redux/actions/media/mediaList/mediaListActions";

export const HomePage = () => {

    const dispatch = useDispatch();
    const mediaListState = useAppSelector(state => state.mediaList);
    const mediaIds: number[] = [2, 3, 4, 5, 6, 7];

    useEffect(() => {
        mediaIds.map(val => dispatch(postMediaList(val)));
    },[])

    const renderSwitch = () => {
        if (mediaListState.loading) {
            return (
                <StyledErrorAndLoading>
                    <CircularProgress />
                </StyledErrorAndLoading>
            )
        } else if (mediaListState.error) {
            return (
                <StyledErrorAndLoading>
                    <Typography
                        variant="h2"
                        component="h2"
                    >
                        Something went wrong.
                    </Typography>
                </StyledErrorAndLoading>
            )
        } else {
            return(
                <>
                    {mediaListState.response.map((val, index) => {
                        return <MediaList key={index} mediaList={val} />
                    })}
                </>
            )
        }
    }

    return (
        <StyledGrid>
            <MediaPlayer />
            {renderSwitch()}
        </StyledGrid>
    )
}