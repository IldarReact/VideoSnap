import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(51, 94, 234)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "rgb(0, 102, 204)",
    },
    text: {
      primary: "rgb(0, 30, 74)",
      secondary: "rgb(107, 124, 147)",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    action: {
      hover: "#1746e0",
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    h1: {
      color: "rgb(0, 30, 74)",
      fontSize: "37px",
      fontWeight: 700,
      lineHeight: "48.1px",
      letterSpacing: "-0.37px",
      marginBottom: "32px",
      marginTop: "0px",
      textAlign: "left" as const,
    },
    h2: hStyles(),
    h3: hStyles(),
    h4: hStyles(),
    body1: {
      color: "rgb(107, 124, 147)",
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: "27.2px",
      margin: "0px",
      textAlign: "left" as const,
    },
    body2: {
      color: "rgb(107, 124, 147)",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      margin: "0px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          fontWeight: 600,
          padding: "12px 24px",
          borderRadius: "8px",
          textTransform: "none",
          transition: "background-color 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#1746e0",
            boxShadow: "0 4px 12px rgba(0, 102, 204, 0.2)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "rgb(0, 30, 74)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(0, 102, 204)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(0, 102, 204)",
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          "& span": {
            color: "rgb(51, 94, 234)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

function hStyles() {
  return {
    color: "rgb(0, 30, 74)",
    fontSize: "21px",
    fontWeight: 700,
    lineHeight: "29.4px",
    letterSpacing: "-0.21px",
    marginBottom: "8px",
    marginTop: "16px",
    textAlign: "left" as const,
  };
}

export default theme;