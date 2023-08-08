import { useMemo } from "react";
import { themeSettings } from "@/theme";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>
            <Routes>
              <Route path="/" element="" />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
