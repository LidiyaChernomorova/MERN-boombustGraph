import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  Button,
} from "@mui/material";
import { grey, brown } from "@mui/material/colors";
import { companyPickedName } from "../../store/data/data.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectTableData,
  selectTableDataIsLoading,
  selectPikedCompanyName,
} from "../../store/data/data.selector";
import { tableDataStart } from "../../store/data/data.action";
import SimpleDialog from "../../dialog-popup/dialog.component";

function CompanyTable() {


  const [open, setOpen] = useState(false);
  const [pickedNote, setPickedNote] = useState({name: '', note: ''});

  const handleClose = (value: string) => {
    setOpen(false);
   // setPickedNote(value);
  };

  const dispatch = useDispatch();
  const rows = useSelector(selectTableData);
  const isLoading = useSelector(selectTableDataIsLoading);
  const pickedName = useSelector(selectPikedCompanyName);

  const thStyle = { borderColor: grey[700], bgcolor: "background.paper" };
  const trStyle = { borderColor: grey[700] };

  function editNote(event: any, name: string, note: string) {
    event.stopPropagation();
    setPickedNote({name, note});
    setOpen(true);
  }

  function pickCompany(asset: string): void {
    dispatch(companyPickedName(asset));
  }

  useEffect(() => {
    dispatch(tableDataStart());
  }, []);

  if (isLoading) {
    return <Card sx={{ p: 2, height: 270 }}>loading...</Card>;
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ height: 270 }}>
        <Table sx={{ minWidth: 650, maxHeight: 50 }} size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={thStyle}>ASSET</TableCell>
              <TableCell align="right" sx={thStyle}>
                NAME
              </TableCell>
              <TableCell align="right" sx={thStyle}>
                DATE RANGE
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
                style={
                  row.asset === pickedName ? { background: brown[500] } : {}
                }
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
                  {row.date ? row.date[0] + " - " + row.date[1] : "no data"}
                </TableCell>
                <TableCell sx={trStyle} align="right">
                  {row.note}
                  <Button
                    sx={{ ml: 1 }}
                    onClick={(event) => editNote(event, row.name, row.note)}
                    size="small"
                    variant="outlined"
                  >
                    edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SimpleDialog
        noteParams={pickedNote}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default CompanyTable;
