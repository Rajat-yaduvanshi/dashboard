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
import { mockTransactions } from "../../data/mockData";
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
                sx={{ color: colors.blueAccent[700], fontSize: "45px" }}
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
                sx={{ color: colors.greenAccent[700], fontSize: "45px" }}
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
                sx={{ color: colors.redAccent[700], fontSize: "45px" }}
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
                sx={{ color: colors.redAccent[400], fontSize: "45px" }}
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.primary[300]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h3" fontWeight="600">
              Recent Orders
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.primary[300]}`}
            colors={colors.grey[100]}
            p="15px 25px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Customer
            </Typography>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Order No.
            </Typography>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Amount
            </Typography>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Status
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid ${colors.primary[300]}`}
              p="15px"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="5px"
              >
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/1.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                // ml="5px"
                color={colors.grey[100]}
              >
                {transaction.txId}
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="35px"
                color={colors.grey[100]}
              >
                ${transaction.cost}
              </Box>
              <Box
                backgroundColor={colors.greenAccent[700]}
                color={colors.greenAccent[500]}
                p="2px 20px"
                borderRadius="40px"
              >
                {transaction.status}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
