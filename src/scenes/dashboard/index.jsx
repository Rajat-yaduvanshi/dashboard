import * as React from "react";
import {
  Box,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import MenuList from "../../components/MenuList";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import PriceChangeRoundedIcon from "@mui/icons-material/PriceChangeRounded";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProfitBox from "../../components/ProfitBox";
import Recentorder from "../../components/Recentorder";
import Review from "../../components/Review";
import "./index.css";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box m="15px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>

      {/* GRID & CHARTS */}
      <Box className="dashboard-layout">
        {/* ROW 1 */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="75"
            subtitle="Total Orders"
            increase="+14%"
            bgcolor={colors.blueAccent[300]}
            icon={
              <WorkRoundedIcon
                sx={{ color: colors.blueAccent[700], fontSize: "40px" , margin: "0px 10px 0px 10px"}}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="70"
            subtitle="Total Delivered"
            increase="+21%"
            bgcolor={colors.greenAccent[300]}
            icon={
              <ShoppingBagRoundedIcon
                sx={{ color: colors.greenAccent[700], fontSize: "40px" ,margin: "0px 10px 0px 10px"}}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="05"
            subtitle="Total cancelled"
            increase="+5%"
            bgcolor={colors.redAccent[400]}
            icon={
              <LocalMallRoundedIcon
                sx={{ color: colors.redAccent[700], fontSize: "40px" , margin: "0px 10px 0px 10px"}}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$12k"
            subtitle="Total Revenue"
            increase="+43%"
            bgcolor={colors.redAccent[200]}
            icon={
              <PriceChangeRoundedIcon
                sx={{ color: colors.redAccent[400], fontSize: "40px" , margin: "0px 10px 0px 10px"}}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ProfitBox
            graphAssum={"*The values here has been rounded off."}
            heading={"Net Profit"}
            value={"$6759.25"}
            incDecValue={"3%"}
            bgcolor={colors.blueAccent[200]}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Activity
              </Typography>
            </Box>
            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  style={{ borderRadius: "40px" }}
                >
                  <MenuItem value={10}>Weekly</MenuItem>
                  <MenuItem value={20}>Monthly</MenuItem>
                  <MenuItem value={30}>Yearly</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box height="300px" m="30px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <MenuList />
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "20px 20px 0 20px" }}
          >
            Recent Orders
          </Typography>

          <Recentorder />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "20px 20px 0 20px" }}
          >
            Customer's Feedback
          </Typography>
          <Box
            p="5px 25px 25px 25px"
            style={{ overflowY: "auto", maxHeight: "480px" }}
          >
            <Review />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
