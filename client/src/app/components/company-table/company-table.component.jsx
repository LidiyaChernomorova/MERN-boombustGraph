import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CompanyTable({ rows }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 100 }}>
      <Table
        sx={{ minWidth: 650, maxHeight: 50 }}
        size="small"
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ASSET</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">NOTE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.asset}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.asset}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CompanyTable;
