export const DEFAULT_PLAYER_CONFIG = {
    autoplay: "0",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    origin: typeof window !== "undefined" ? window.location.origin : "",
} as const;