import React from "react";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer ,CartesianGrid  } from "recharts";
import { data } from "../data/data.js";

const ActivityChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveContainer width="99%" height={250}>
      <BarChart data={data}>
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis tick={{ fontSize: 12 }} />
        <Bar
          dataKey="uv"
          fill={colors.blueAccent[500]}
          radius={[20, 20, 20, 20]}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
