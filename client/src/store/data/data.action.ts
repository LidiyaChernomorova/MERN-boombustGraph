import { ACTION_TYPES } from "./data.type";
import createAction from "../../helpers/create-action";
import TableData from "../../interfaces/table-data.interface";
import NoteData from "../../interfaces/notes-data.interface";


// TABLE
export function tableDataStart() {
  return createAction(ACTION_TYPES.META.START);
}

export function tableDataSuccess(tableData: TableData) {
  return createAction<TableData>(
    ACTION_TYPES.META.SUCCESS,
    tableData
  );
}

export function tableDataFailed(error: Error) {
  return createAction<Error>(ACTION_TYPES.META.FAILED, error);
}


// NOTE
export function noteDataStart() {
  return createAction(ACTION_TYPES.NOTE.START);
}

export function noteDataSuccess(notesData: NoteData[]) {
  return createAction<NoteData[]>(
    ACTION_TYPES.NOTE.SUCCESS,
    notesData
  );
}

export function noteDataFailed(error: Error) {
  return createAction<Error>(ACTION_TYPES.NOTE.FAILED, error);
}


// COMPANY
export function companyDataStart(companyName: string) {
  return createAction<string>(
    ACTION_TYPES.COMPANY.START,
    companyName
  );
}

export function companyDataSuccess(companyData: any) {
  return createAction<any>(
    ACTION_TYPES.COMPANY.SUCCESS,
    companyData
  );
}

export function companyDataFailed(error: Error) {
  return createAction<Error>(ACTION_TYPES.COMPANY.FAILED, error);
}

export function companyPickedName(companyName: string) {
  return createAction<string>(
    ACTION_TYPES.COMPANY.PICKED_NAME,
    companyName
  );
}

export function companyPickedFrom(from: { value: string; index: number }) {
  return createAction<{ value: string; index: number }>(
    ACTION_TYPES.COMPANY.PICKED_FROM,
    from
  );
}

export function companyPickedTo(to: { value: string; index: number }) {
  return createAction<{ value: string; index: number }>(
    ACTION_TYPES.COMPANY.PICKED_TO,
    to
  );
}
