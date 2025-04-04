import { DEFAULT_PLAYER_CONFIG } from "./constants";

export const getYouTubeVideoUrl = (videoId: string, config = DEFAULT_PLAYER_CONFIG) => {
  const baseVideoUrl = 'https://www.youtube.com/embed/';
  const params = new URLSearchParams({
    autoplay: config.autoplay,
    controls: config.rel,
    rel: config.modestbranding,
    modestbranding: config.iv_load_policy,
    origin: config.origin,
  });

  return `${baseVideoUrl}${videoId}?${params.toString()}`;
};