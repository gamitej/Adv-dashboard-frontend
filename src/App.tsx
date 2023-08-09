import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// mui
import { themeSettings } from "@/theme";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// scenes
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predicitions from "@/scenes/predicitions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predicitions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
