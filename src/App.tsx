import { createContext, useMemo, useState } from "react";
import { Outlet } from "react-router-dom"
import { NavBar, SideBar } from "./components"
import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { getStoredMode, setStoredMode } from './utils/storage';
import { getTheme } from "./theme";

export const ToggledContext = createContext(null);

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>(getStoredMode);
  const [toggled, setToggled] = useState<boolean>(false);
  
  const theme = useMemo(() => getTheme(mode), [mode]);
  const value = {toggled, setToggled}

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    setStoredMode(newMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToggledContext.Provider value={value}>
        <Box sx={{
          display: "flex",
        }}>
          <SideBar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100vh",
              overflowY: "scroll"
            }}
          >
            <NavBar mode={mode} toggleMode={toggleMode} />
            <Box sx={{ padding: "1rem" }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </ToggledContext.Provider>
    </ThemeProvider>
  )
}

export default App
