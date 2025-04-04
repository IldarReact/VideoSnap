import { useCallback, useRef } from "react";

export const useVideoParams = (videoId: string, autoplay: boolean, showControls: boolean) => {
    const videoParamsRef = useRef<string>("");

    const updateVideoParams = useCallback(
        (forceAutoplay: boolean = false) => {
            const params = new URLSearchParams({
                autoplay: forceAutoplay || autoplay ? "1" : "0",
                mute: "0",
                controls: showControls ? "1" : "0",
                rel: "0",
                modestbranding: "1",
                origin: window.location.origin,
                iv_load_policy: "3",
                cc_load_policy: "0",
                fs: "1",
                playsinline: "1",
            }).toString();

            videoParamsRef.current = `https://www.youtube.com/embed/${videoId}?${params}`;
        },
        [videoId, autoplay, showControls]
    );

    return { videoParamsRef, updateVideoParams };
};