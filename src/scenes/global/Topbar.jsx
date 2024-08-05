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

const Topbar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      backgroundColor={colors.primary[400]}
      className={props.className}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.grey[700]}
        borderRadius="8px"
        width="400px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        padding="5px"
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
            <DarkModeOutlinedIcon fontSize="large" />
          ) : (
            <LightModeOutlinedIcon fontSize="large" />
          )}
        </IconButton>
        <IconButton>
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon fontSize="large" />
        </IconButton>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml="25px"
        >
          <img
            alt="profile-user"
            width="50px"
            height="50px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
