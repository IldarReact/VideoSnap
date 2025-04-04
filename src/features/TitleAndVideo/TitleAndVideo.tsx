import { Box, Stack, Typography } from "@mui/material";
import YouTubeVideo from "../VideoPlayer/YouTubeVideo";

const TitleAndVideo = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mb: { xs: 3, md: 6 },
        textAlign: { xs: "center", md: "left" },
        gap: { xs: 3, md: 10 },
      }}
    >
      <Box
        flex={1}
        sx={{ maxWidth: { xs: "100%", md: "400px" }, px: { xs: 2, md: 0 } }}
      >
        <Typography variant="h1">Most important title on the page</Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html:
              "Lorem ipsum dolor sit amet, <span>consectetur adipiscing</span> elit. Aliquam mattis, leo et condimentum ultricies, <span>sem urna convallis</span> metus, vel suscipit nibh lacus tincidunt ante",
          }}
        />
      </Box>
      <Box
        flex={1}
        sx={{ width: "100%", maxWidth: { xs: "100%", md: "560px" } }}
      >
        <YouTubeVideo videoId="dQw4w9WgXcQ" />
      </Box>
    </Stack>
  );
};

export default TitleAndVideo;