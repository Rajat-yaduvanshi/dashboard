import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { menudata } from "../data/data.js";


const MenuList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      {menudata.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box key={index} sx={{ display: "flex" }}>
            <Typography
              variant="h1"
              sx={{ display: "flex", alignItems: "center", p: 1 }}
            >
              {item.icon}
            </Typography>
            <Typography
              variant="h3"
              sx={{ display: "flex", alignItems: "center", p: 1 }}
            >
              {item.title}
            </Typography>
          </Box>
          <Box
            backgroundColor="#616569"
            borderRadius="20px"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <ArrowForwardIosIcon />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MenuList;
