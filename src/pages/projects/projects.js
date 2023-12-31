import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "-100",
      }}
    >
      <TextHolder variant="h2">This is projects page</TextHolder>
    </Box>
  );
};

export default ProjectsPage;
