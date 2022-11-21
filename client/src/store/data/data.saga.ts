import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../api";
import TableData from "../../interfaces/table-data.interface";
import MetaDataResp from "../../interfaces/meta-data-resp.interface";
import { tableDataFailed, tableDataSuccess } from "./data.action";
import { TABLE_DATA_ACTION_TYPES } from "./data.type";

async function getMetaData(): Promise<TableData[]> {
  const { data } = await api.getMetaData();
  return createTableData(data);
}


function createTableData(metaData: MetaDataResp): TableData[] {
  const fullNames = Object.keys(metaData.FULL_NAMES);
  const intervales = metaData.INTERVALES;
  return fullNames.map((asset) => {
    return { asset, name: metaData.FULL_NAMES[asset], date: intervales[asset] || null, note: "ololo" };
  });
}


function* tableData() {
  try {
    const data: TableData = yield call(getMetaData);
    yield put(tableDataSuccess(data));
  } catch (error: any) {
    yield put(tableDataFailed(error));
  }
}

export function* onGetMetaDataStart() {
  yield takeLatest(TABLE_DATA_ACTION_TYPES.GET.START, tableData);
}

export function* dataSaga() {
  yield all([call(onGetMetaDataStart)]);
}
