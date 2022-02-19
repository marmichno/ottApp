import { StyledGrid, StyledMediaItem } from "./StyledMediaItem"
import { Typography } from "@mui/material"
// redux
import { useDispatch } from "react-redux";
// actions
import { postMediaPlayInfo } from "../../../../redux/actions/media/mediaPlayInfo/mediaPlayInfoActions";

export const MediaItem = ({ title, mediaId, imageUrl }: { title: string, mediaId: number, imageUrl: string | null }) => {

    const dispatch = useDispatch();
    const url = imageUrl ? imageUrl : 'https://via.placeholder.com/1920x1080/eee?text=16:9';

    const playVideo = () => {
        dispatch(postMediaPlayInfo(mediaId));
    }

    return (
        <StyledGrid>
            <StyledMediaItem onClick={playVideo} bg={url}>
                <Typography
                    onClick={playVideo}
                    variant="h5"
                    component="h5"
                    color="white"
                    sx={{maxWidth: "80%"}}
                >
                    {title}
                </Typography>
            </StyledMediaItem>
        </StyledGrid>
    )
}