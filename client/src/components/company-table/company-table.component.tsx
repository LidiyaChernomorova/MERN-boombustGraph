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
} from "@mui/material";
import { grey, brown } from "@mui/material/colors";
import { companyName } from "../../store/data/data.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectTableData,
  selectTableDataIsLoading,
  selectPikedCompanyName,
  selectTableDataNotes,
} from "../../store/data/data.selector";
import { tableDataStart, noteDataStart } from "../../store/data/data.action";
import ChangeNoteDialog from "../../dialogs/change-note.dialog";
import NoteData from "../../interfaces/notes-data.interface";
import TableData from "../../interfaces/table-data.interface";
import apis from "../../api";
import { makeStyles } from "@material-ui/core/styles";
import tableStyles from "./company-table.styles";

function CompanyTable() {
  const [open, setOpen] = useState(false);
  const [pickedTableData, setPickedTableData] = useState<TableData>();
  const [pickedNote, setPickedNote] = useState<NoteData>();

  const dispatch = useDispatch();
  const tabledata = useSelector(selectTableData);
  const tableDataNotes = useSelector(selectTableDataNotes);
  const isLoading = useSelector(selectTableDataIsLoading);
  const pickedName = useSelector(selectPikedCompanyName);

  const thStyle = { borderColor: grey[700], bgcolor: "background.paper" };
  const trStyle = { borderColor: grey[700] };
  const useStyles = makeStyles(tableStyles);
  const classes = useStyles();

  function saveNoteDialog(noteText: string) {
    setOpen(false);
    if (pickedNote?._id) {
      apis
        .updateNoteById(pickedNote._id, noteText)
        .then(() => {
          dispatch(noteDataStart());
        })
        .catch(console.error);
    } else {
      pickedTableData &&
        apis
          .addNote(noteText, pickedTableData.asset)
          .then(() => {
            dispatch(noteDataStart());
          })
          .catch(console.error);
    }
  }

  function removeNoteDialog() {
    setOpen(false);
    pickedNote?._id &&
      apis
        .deleteNoteById(pickedNote._id)
        .then(() => {
          dispatch(noteDataStart());
        })
        .catch(console.error);
  }

  function editNote(
    event: any,
    tableData: TableData,
    noteData: NoteData | undefined
  ) {
    event.stopPropagation();
    setPickedTableData(tableData);
    setPickedNote(noteData);
    setOpen(true);
  }

  function pickCompany(asset: string): void {
    dispatch(companyName(asset));
  }

  useEffect(() => {
    dispatch(tableDataStart());
    dispatch(noteDataStart());
  }, [dispatch]);

  if (isLoading) {
    return <Card sx={{ p: 2, height: 270 }}>loading...</Card>;
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ height: 270, cursor: "default" }}>
        <Table sx={{ minWidth: 650, maxHeight: 50 }} size="small" stickyHeader>
          <TableHead>
            <TableRow className={classes.row}>
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
            {tabledata.map((data) => {
              const noteData = tableDataNotes.find(
                (note) => note.asset === data.asset
              );

              return (
                <TableRow
                  className={classes.row}
                  hover
                  style={
                    data.asset === pickedName ? { background: brown[500] } : {}
                  }
                  onClick={() => pickCompany(data.asset)}
                  key={data.asset}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={trStyle} component="th" scope="row">
                    {data.asset}
                  </TableCell>
                  <TableCell sx={trStyle} align="right">
                    {data.name}
                  </TableCell>
                  <TableCell sx={trStyle} align="right">
                    {data.date
                      ? data.date[0] + " - " + data.date[1]
                      : "no data"}
                  </TableCell>
                  <TableCell
                    className={classes.dotsToCutNote}
                    sx={{ ...trStyle, cursor: "pointer" }}
                    align="right"
                    onClick={(event) => editNote(event, data, noteData)}
                  >
                    {noteData?.note || ""}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ChangeNoteDialog
        tableData={pickedTableData}
        noteData={pickedNote}
        open={open}
        cancel={() => setOpen(false)}
        save={saveNoteDialog}
        remove={removeNoteDialog}
      />
    </>
  );
}

export default CompanyTable;
