import { TABLE_DATA_ACTION_TYPES } from "./data.type";
import createAction from "../../helpers/create-action";
import TableData from "../../interfaces/table-data.interface";

export function tableDataStart() {
  return createAction(TABLE_DATA_ACTION_TYPES.GET.START);
}

export function tableDataSuccess(tableData: TableData) {
  return createAction<TableData>(TABLE_DATA_ACTION_TYPES.GET.SUCCESS, tableData);
}

export function tableDataFailed(error: Error) {
  return createAction<Error>(TABLE_DATA_ACTION_TYPES.GET.FAILED, error);
}
