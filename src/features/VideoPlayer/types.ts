export interface YouTubeVideoConfig {
    autoplay: string | "0" | "1";
    rel: string | "0" | "1";
    modestbranding: string | "0" | "1";
    iv_load_policy: string | "1" | "3";
    origin: string;
}

export type YouTubeVideoProps = {
  videoId: string;
  autoplay?: boolean;
  showControls?: boolean;
  title?: string;
  description?: string;
};
