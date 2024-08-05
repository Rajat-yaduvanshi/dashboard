import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({
  title,
  subtitle,
  icon,
  increase,
  bgcolor,
  numColor,
  arrow,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflow: "hidden",
      }}
    >
      <Box display="flex" sx={{ padding: "10px" }}>
        <Box backgroundColor={`${bgcolor}`} borderRadius="10px">
          {icon}
        </Box>
      </Box>
      <Box display="flex">
        <Typography
          fontWeight="bold"
          sx={{
            color: colors.grey[100],
            fontSize: "20px",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ color: colors.grey[100], fontSize: "45px" ,fontWeight: "bold"}}>
          {title}
        </Typography>
        <Box display="flex">
          <Typography
            fontStyle="italic"
            sx={{
              color: numColor,
              fontSize: "25px",
              display: "flex",
              flexDirection: "column",
              paddingTop: "35px",
              overflow: "hidden",
            }}
          >
            {arrow}
          </Typography>

          <Typography
            fontStyle="italic"
            sx={{
              color: numColor,
              fontSize: "15px",
              display: "flex",
              flexDirection: "column",
              paddingTop: "36px",
              overflow: "hidden",
            }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
