import { createTheme } from '@mui/material';
import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'light' ? 'rgb(242 240 240)' : '#434957',
      },
      text: {
        primary: mode === 'light' ? '#000000' : '#ffffff',
        secondary: mode === 'light' ? '#3da58a' : "#70d8bd",
      },
    },
  });