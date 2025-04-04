import { styled } from "@mui/material/styles";

export const PlayerContainer = styled("div")({
    position: "relative",
    width: "100%",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    borderRadius: "12px",
    "& > iframe, & > .thumbnail": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: 0,
        borderRadius: "12px",
    },
    "& > .thumbnail": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    "& > .thumbnail > img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "12px",
    },
    "& > .thumbnail > .play-button": {
        width: 60,
        height: 60,
        backgroundColor: "rgba(0, 30, 74, 0.8)",
        borderRadius: "50%",
        "& svg": {
            fontSize: 60,
            color: "#ffffff",
        },
        "&:hover": {
            backgroundColor: "rgb(0, 102, 204)",
        },
    },
});