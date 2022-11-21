import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { grey, brown } from "@mui/material/colors";
import CompanyData from "../../interfaces/company-data.interface";

function CompanyTable({ rows }: { rows: CompanyData[] }) {
  const [selectedRow, setSelectedRow] = useState("");

  const thStyle = { borderColor: grey[700], bgcolor: "background.paper" };
  const trStyle = { borderColor: grey[700] };

  function pickCompany(asset: string): void {
    setSelectedRow(asset);
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 270 }}>
      <Table sx={{ minWidth: 650, maxHeight: 50 }} size="small" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={thStyle}>ASSET</TableCell>
            <TableCell align="right" sx={thStyle}>
              NAME
            </TableCell>
            <TableCell align="right" sx={thStyle}>
              DATE
            </TableCell>
            <TableCell align="right" sx={thStyle}>
              NOTE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              hover
              style={row.asset === selectedRow ? { background: brown[500] } : {}}
              onClick={() => pickCompany(row.asset)}
              key={row.asset}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={trStyle} component="th" scope="row">
                {row.asset}
              </TableCell>
              <TableCell sx={trStyle} align="right">
                {row.name}
              </TableCell>
              <TableCell sx={trStyle} align="right">
                {row.date}
              </TableCell>
              <TableCell sx={trStyle} align="right">
                {row.note}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CompanyTable;
