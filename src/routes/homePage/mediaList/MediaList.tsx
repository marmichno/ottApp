// hooks
import { useAppSelector } from "../../../hooks/hooks";
// styled
import { StyledGrid } from "./StyledMediaList";
// mui
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
// components
import { MediaItem } from "./mediaItem/MediaItem";
// scroll container
import { StyledScrollContainer } from "./StyledMediaList";
// types
import { PostMediaListResponse } from "../../../redux/actions/media/mediaList/mediaListTypes";


export const MediaList = ({ mediaList }: { mediaList: PostMediaListResponse }) => {

    const mediaListState = useAppSelector(state => state.mediaList);

    const renderList = () => {
        if (mediaListState.loading) {
            return (
                null
            )
        } else if (mediaListState.error) {
            return (
                null
            )
        } else {
            return (
                <StyledGrid>
                    <Grid sx={{ width: "100%", height: "20%" }}>
                        <Typography
                            variant="h3"
                            component="h2"
                        >

                            Video list:
                        </Typography>
                    </Grid>
                    <Grid sx={{ width: "100%", height: "80%" }}>
                        <StyledScrollContainer>
                            {mediaList.Entities.map(val => {
                                let imageFrame = val.Images.map(val => {
                                    if (val.ImageTypeCode === 'FRAME') {
                                        return val.Url;
                                    } else {
                                        return null;
                                    }
                                })[0];
                                return (
                                    <MediaItem key={val.Id} title={val.Title} mediaId={val.Id} imageUrl={imageFrame} />
                                )
                            })}
                        </StyledScrollContainer>
                    </Grid>
                </StyledGrid>
            )
        }
    }

    return (
        <>
            {renderList()}
        </>
    )
}