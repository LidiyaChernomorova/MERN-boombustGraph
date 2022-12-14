import { ACTION_TYPES } from "./data.type";
import createAction from "../../helpers/create-action";
import TableData from "../../interfaces/table-data.interface";
import NoteData from "../../interfaces/notes-data.interface";
import CompanyData from "../../interfaces/company-data.interface";

// TABLE
export function tableDataStart() {
  return createAction(ACTION_TYPES.META.START);
}

export function tableDataSuccess(tableData: TableData) {
  return createAction<TableData>(ACTION_TYPES.META.SUCCESS, tableData);
}

export function tableDataFailed(error: Error) {
  return createAction<Error>(ACTION_TYPES.META.FAILED, error);
}

// NOTE
export function noteDataStart() {
  return createAction(ACTION_TYPES.NOTE.START);
}

export function noteDataSuccess(notesData: NoteData[]) {
  return createAction<NoteData[]>(ACTION_TYPES.NOTE.SUCCESS, notesData);
}

export function noteDataFailed(error: Error) {
  return createAction<Error>(ACTION_TYPES.NOTE.FAILED, error);
}

// COMPANY
export function setCompanyStart(companyName: string) {
  return createAction<string>(ACTION_TYPES.COMPANY.START, companyName);
}

export function setCompanySuccess(company: CompanyData) {
  return createAction<CompanyData>(ACTION_TYPES.COMPANY.SUCCESS, company);
}

export function setCompanyFailed(error: Error) {
  return createAction<Error>(ACTION_TYPES.COMPANY.FAILED, error);
}

export function companyName(companyName: string) {
  return createAction<string>(ACTION_TYPES.COMPANY.NAME, companyName);
}

// COMPANY COMPARE
export function setCompanyCompareStart(companyName: string) {
  return createAction<string>(ACTION_TYPES.COMPARE_COMPANY.START, companyName);
}

export function setCompanyCompareSuccess(company: CompanyData | null) {
  return createAction<CompanyData | null>(ACTION_TYPES.COMPARE_COMPANY.SUCCESS, company);
}

export function setCompanyCompareFailed(error: Error) {
  return createAction<Error>(ACTION_TYPES.COMPARE_COMPANY.FAILED, error);
}

export function setCompanyCompareName(companyName: string) {
  return createAction<string>(ACTION_TYPES.COMPARE_COMPANY.NAME, companyName);
}


// INPUTS
export function setFrom(from: { value: string; index: number }) {
  return createAction<{ value: string; index: number }>(
    ACTION_TYPES.INPUT.FROM,
    from
  );
}

export function setTo(to: { value: string; index: number }) {
  return createAction<{ value: string; index: number }>(
    ACTION_TYPES.INPUT.TO,
    to
  );
}

