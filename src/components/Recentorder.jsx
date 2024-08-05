import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { columns } from "../data/mockData";
import img1 from "../image/1.png";

function createData(name, order, amount, status) {
  return { name, order, amount, status };
}

const rows = [
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Jane Cooper", 48965786, "$365.02", "Delivered"),
  createData("Guy hawkins", 78958215, "$45.88", "Cancelled"),
  createData("kristin Watson", 20965732, "$65.00", "Pending"),
  createData("Cody Fisher", 95715620, "$545.00", "Delivered"),
];

export default function Recentorder() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        height: "90",
        overflow: "hidden",
        backgroundColor: colors.primary[400],
      }}
    >
      <TableContainer sx={{ maxHeight: 440, backgroundColor: colors.primary[400]}}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align}>
                <h3>{column.label}</h3>
              </TableCell>
            ))}
          </TableRow>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "name") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Box display="flex" alignItems="center">
                              <img
                                src={img1}
                                alt="Customer"
                                style={{
                                  width: 50,
                                  height: 50,
                                  marginRight: 10,
                                }}
                              />
                              <h4>{value}</h4>
                            </Box>
                          </TableCell>
                        );
                      } else if (column.id === "status") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <span
                              style={{
                                backgroundColor:
                                  value === "Delivered"
                                    ? colors.greenAccent[800]
                                    : colors.redAccent[700],
                                padding: "5px 15px",
                                borderRadius: "15px",
                                color:
                                  value === "Delivered"
                                    ? colors.greenAccent[600]
                                    : colors.redAccent[400],
                              }}
                            >
                              {value}
                            </span>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
