import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor={colors.primary[400]}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.grey[700]}
        borderRadius="10px"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon fontSize="large"/>
          ) : (
            <LightModeOutlinedIcon fontSize="large"/>
          )}
        </IconButton>
        <IconButton>
          <EmailIcon fontSize="large"/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon fontSize="large"/>
        </IconButton>
        <IconButton>
        <NotificationsOutlinedIcon fontSize="large"/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
