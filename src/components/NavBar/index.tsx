import { Box, IconButton } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import { useContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { ToggledContext } from '../../App';

interface NavBarProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}
type toggle = {
  toggled: any,
  setToggled: any
}

const NavBar = ({ mode, toggleMode } : NavBarProps) => {
  const { toggled, setToggled } = useContext<toggle>(ToggledContext);
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "1rem"
      }}
    >
      <IconButton
          sx={{ 
            display: {xs: "flex", md: "none"},
          }}
          onClick={() => setToggled(!toggled)}
        >
          <IoIosMenu />
      </IconButton>
      <Box
        sx={{
          bgcolor: mode === "light" ? "#fcfcfc" : "#141b2d",
          borderRadius: "0.3rem",
          paddingLeft: "1rem",
          display: {xs: "none", sm: "block"}
        }}
      >
        <InputBase
          placeholder="Search"
          sx={{
            fontSize: "0.8rem"
          }}
        />
        <IconButton type="button" aria-label="search">
          <IoIosSearch size={20} />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={toggleMode}>
          {mode ==="light" ? <CiDark /> : <CiLight />}
        </IconButton>
        <IconButton>
          <IoIosNotificationsOutline />
        </IconButton>
        <IconButton>
          <IoSettingsOutline />
        </IconButton>
        <IconButton>
          <CiUser />
        </IconButton>
      </Box>
    </Box>
  )
}

export default NavBar