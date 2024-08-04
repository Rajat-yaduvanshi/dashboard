import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon, increase , bgcolor , numColor}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box backgroundColor={`${bgcolor}`} borderRadius="10px">
          {icon}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {subtitle}
          </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="10px">
        <Typography variant="h1" sx={{ color: colors.grey[100] }}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          mt="20px"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
