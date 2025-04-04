import React from "react";
import { CardMedia, Skeleton, Box, IconButton } from "@mui/material";
import PlayArrow from "@mui/icons-material/PlayArrow";

interface VideoThumbnailProps {
  thumbnailSrc: string;
  title?: string;
  onPlayClick: () => void;
  isThumbnailLoaded: boolean;
  setIsThumbnailLoaded: (loaded: boolean) => void;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  thumbnailSrc,
  title,
  onPlayClick,
  isThumbnailLoaded,
  setIsThumbnailLoaded,
}) => (
  <>
    {!isThumbnailLoaded && <Skeleton variant="rectangular" />}
    <CardMedia
      component="img"
      image={thumbnailSrc}
      alt={title || "Video thumbnail"}
      onLoad={() => setIsThumbnailLoaded(true)}
      sx={{ display: isThumbnailLoaded ? "block" : "none" }}
    />
    {isThumbnailLoaded && (
      <Box className="thumbnail">
        <IconButton
          className="play-button"
          onClick={onPlayClick}
          aria-label="Play video"
        >
          <PlayArrow />
        </IconButton>
      </Box>
    )}
  </>
);