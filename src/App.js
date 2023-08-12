import AppRoutes from "./routes";
import AppStoreProvider from "./redux";
import AppThemeProvider from "./mui_theme";
import { ErrorBoundary } from "react-error-boundary";
import AppFallbackComponent from "./components/error_fallback";
import { Box } from "@mui/material";

const App = () => {
  return (
    <ErrorBoundary
      resetKeys={["Sanva"]}
      FallbackComponent={AppFallbackComponent}
    >
      <Box className="Sanva" name="Sanva">
        <AppStoreProvider>
          <AppThemeProvider>
            <AppRoutes />
          </AppThemeProvider>
        </AppStoreProvider>
      </Box>
    </ErrorBoundary>
  );
};

export default App;
