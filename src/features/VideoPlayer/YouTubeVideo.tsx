import React, { useState, useCallback, useEffect } from "react";
import { Typography } from "@mui/material";
import { YouTubeVideoProps } from "./types";
import { PlayerContainer } from "./PlayerContainerStyles";
import { VideoPlayer } from "./VideoPlayer";
import { VideoThumbnail } from "./VideoThumbnail";
import { useVideoParams } from "./hooks/useVideoParams";

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  autoplay = false,
  showControls = true,
  title,
  description,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  const thumbnailSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const { videoParamsRef, updateVideoParams } = useVideoParams(
    videoId,
    autoplay,
    showControls
  );

  useEffect(() => {
    updateVideoParams(autoplay);
  }, [autoplay, showControls, updateVideoParams]);

  const handlePlayClick = useCallback(() => {
    updateVideoParams(true);
    setIsLoaded(true);
  }, [updateVideoParams]);

  return (
    <>
      <PlayerContainer>
        {isLoaded ? (
          <VideoPlayer src={videoParamsRef.current} title={title} />
        ) : (
          <VideoThumbnail
            thumbnailSrc={thumbnailSrc}
            title={title}
            onPlayClick={handlePlayClick}
            isThumbnailLoaded={isThumbnailLoaded}
            setIsThumbnailLoaded={setIsThumbnailLoaded}
          />
        )}
      </PlayerContainer>
      {title && (
        <Typography variant="h2" sx={{ mt: 2 }} component="h2">
          {title}
        </Typography>
      )}
      {description && <Typography variant="body1">{description}</Typography>}
    </>
  );
};

export default YouTubeVideo;