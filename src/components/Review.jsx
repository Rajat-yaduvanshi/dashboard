import React from "react";
import { tokens } from "../theme";
import { reviewData } from "../data/mockData";
import { Box, Typography, useTheme } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const Review = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      {reviewData.map((item) => {
        return (
          <Box
            alignItems="center"
            borderBottom={`1px solid ${colors.primary[300]}`}
          >
            <Box display="flex" alignItems="center">
              <img
                alt="profile-user"
                width="50px"
                height="50px"
                src={item.img}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              <Typography color={colors.grey[100]}>
                <h2>{item.name} </h2>
              </Typography>
            </Box>
            <Box>
              <Rating
                name="text-feedback"
                value={item.rating}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 1.55 }} fontSize="inherit" />
                }
              />
            </Box>
            <Typography color={colors.grey[100]} p="1px">{item.text}</Typography>
          </Box>
        );
      })}
    </div>
  );
};

export default Review;
