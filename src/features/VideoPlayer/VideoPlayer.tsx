import React from "react";

interface VideoPlayerProps {
  src: string;
  title?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => (
  <iframe
    src={src}
    title={title || "YouTube video"}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    loading="lazy"
  />
);