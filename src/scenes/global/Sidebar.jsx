import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "25px 25px 20px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon fontSize="large"/> : undefined}
            style={{
              margin: "-20px 0 -10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h2" color={colors.grey[100]}>
                  FITPEO
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon fontSize="large"/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"LogoutIcon
              icon={<HomeOutlinedIcon fontSize="large"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Charts"
              to="/team"
              icon={<InsertChartOutlinedIcon fontSize="large"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="ToDo List"
              to="/contacts"
              icon={<InventoryOutlinedIcon fontSize="large"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Wallet"
              to="/invoices"
              icon={<AccountBalanceWalletOutlinedIcon fontSize="large"/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Cart"
              to="/form"
              icon={<LocalMallOutlinedIcon fontSize="large"/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          <Box 
            style={{
              position: 'absolute', 
              bottom: 0, 
              width: '100%', 
              paddingLeft: isCollapsed ? undefined : "10%",
            }}
          >
            <Item
              title="Log Out"
              to="/logout"
              icon={<LogoutIcon fontSize="large"/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
