import { Avatar, Box, IconButton, styled, Typography, useTheme } from "@mui/material"
import { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import { MdDashboard, MdContacts} from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaQuestion } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { SiStreamlabs } from "react-icons/si";
import { ToggledContext } from "../../App";

type toggle = {
  toggled: any,
  setToggled: any
}

const SideBar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { toggled, setToggled } = useContext<toggle>(ToggledContext);
  const theme = useTheme();
  
  const StyledRouterLink = styled(Link)({
    '&:hover': {
      backgroundColor: theme.palette.mode === "light" ? "#f3f3f3!important" : "#141b2d!important",
    }
  })
  
  return (
    <Sidebar 
      collapsed={collapsed} 
      collapsedWidth="5rem"
      breakPoint="md"
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
    >
      <Box
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
          paddingBottom: "5rem",
          bgcolor: theme.palette.mode === "light" ? "rgba(212, 220, 230, 1)" : "rgba(77, 73, 87, 1)"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem",
            margin: "0.5rem 0"
          }}
        >
          {!collapsed && (
            <Typography
              variant="h1"
              sx={{
                fontSize: "3rem"
              }}
            >
              HT
            </Typography>
          )}
          
          <IconButton onClick={() => setCollapsed(prev => !prev)} >
            <IoIosMenu size={30} />
          </IconButton>
        </Box>
        {!collapsed && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1
            }}
          >
            <Avatar 
              alt="Remy Sharp" 
              src="https://mui.com/static/images/avatar/1.jpg" 
              sx={{ width: 80, height: 80 }} 
            />
            <Typography
              variant="h2"
              sx={{ fontSize: '1.5rem', fontWeight: "bold", lineHeight: 1.4 }}
            >
              Hồ Thắng            
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1 }}>
              Admin
            </Typography>
          </Box>
        )}
        <Menu rootStyles={{ marginTop: "2rem" }}>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<MdDashboard size={22} />}
            component={<StyledRouterLink to="/" />}
            prefix="Dashboard"
          /> 
        </Menu>
        {!collapsed && (
          <Typography
            variant="h3"
            sx={{ fontSize: "1.1rem", fontWeight: "bold", padding: "0.9rem 1.5rem" }}
          >
            Data
          </Typography>
        )}
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<HiMiniUserGroup size={22} />}
            component={<StyledRouterLink to="/manage" />}
            prefix="Manage Team"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<MdContacts size={22} />}
            component={<StyledRouterLink to="/contacts" />}
            prefix="Contacts Information"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<LiaFileInvoiceSolid size={22} />}
            component={<StyledRouterLink to="/invoices" />}
            prefix="Invoices Balances"
          /> 
        </Menu>
        {!collapsed && (
          <Typography
            variant="h3"
            sx={{ fontSize: "1.1rem", fontWeight: "bold", padding: "0.9rem 1.5rem" }}
          >
            Pages
          </Typography>
        )}
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<CgProfile size={22} />}
            component={<StyledRouterLink to="/profile" />}
            prefix="Profile Form"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<FaCalendarAlt size={22} />}
            component={<StyledRouterLink to="/calendar" />}
            prefix="Calendar"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<FaQuestion size={22} />}
            component={<StyledRouterLink to="/faq" />}
            prefix="FAQ Page"
          /> 
        </Menu>
        {!collapsed && (
          <Typography
            variant="h3"
            sx={{ fontSize: "1.1rem", fontWeight: "bold", padding: "0.9rem 1.5rem" }}
          >
            Charts
          </Typography>
        )}
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<FaChartBar size={22} />}
            component={<StyledRouterLink to="/barchart" />}
            prefix="Bar Chart"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<FaChartPie size={22} />}
            component={<StyledRouterLink to="/piechart" />}
            prefix="Pie Chart"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<FaChartLine size={22} />}
            component={<StyledRouterLink to="/linechart" />}
            prefix="Line Chart"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<FaRegMap size={22} />}
            component={<StyledRouterLink to="/geographychart" />}
            prefix="Geography Chart"
          /> 
        </Menu>
        <Menu>
          <MenuItem
            rootStyles={{ fontSize: "0.9rem" }}
            icon={<SiStreamlabs size={22} />}
            component={<StyledRouterLink to="/streamchart" />}
            prefix="Stream Chart"
          /> 
        </Menu>
      </Box>
    </Sidebar>
  )
}

export default SideBar