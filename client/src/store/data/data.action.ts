import { TABLE_DATA_ACTION_TYPES } from "./data.type";
import createAction from "../../helpers/create-action";
import TableData from "../../interfaces/table-data.interface";



export function tableDataStart() {
  return createAction(TABLE_DATA_ACTION_TYPES.META.START);
}

export function tableDataSuccess(tableData: TableData) {
  return createAction<TableData>(TABLE_DATA_ACTION_TYPES.META.SUCCESS, tableData);
}

export function tableDataFailed(error: Error) {
  return createAction<Error>(TABLE_DATA_ACTION_TYPES.META.FAILED, error);
}



export function companyDataStart(companyName: string) {
  return createAction<string>(TABLE_DATA_ACTION_TYPES.COMPANY.START, companyName);
}

export function companyDataSuccess(companyData: any) {
  return createAction<any>(TABLE_DATA_ACTION_TYPES.COMPANY.SUCCESS, companyData);
}

export function companyDataFailed(error: Error) {
  return createAction<Error>(TABLE_DATA_ACTION_TYPES.COMPANY.FAILED, error);
}

export function companyPickedName(companyName: string) {
  return createAction<string>(TABLE_DATA_ACTION_TYPES.COMPANY.PICKED_NAME, companyName);
}
