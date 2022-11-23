import {
  takeLatest,
  all,
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import api from "../../api";
import TableData from "../../interfaces/table-data.interface";
import MetaDataResp from "../../interfaces/meta-data-resp.interface";
import {
  tableDataFailed,
  tableDataSuccess,
  companyDataStart,
  companyDataSuccess,
  companyDataFailed,
  companyPickedFrom,
  companyPickedTo,
} from "./data.action";
import { ACTION_TYPES } from "./data.type";
import CompanyData from "../../interfaces/company-data.interface";
import Action from "../../interfaces/action.interface";

async function getMetaData(): Promise<TableData[]> {
  const { data } = await api.getMetaData();
  return createTableData(data);
}

async function getCompanyData(companyName: string): Promise<CompanyData> {
  const { data } = await api.getCompanyData(companyName);
  return data;
}

function createTableData(metaData: MetaDataResp): TableData[] {
  const fullNames = Object.keys(metaData.FULL_NAMES);
  const intervales = metaData.INTERVALES;
  return fullNames.map((asset) => {
    return {
      asset,
      name: metaData.FULL_NAMES[asset],
      date: intervales[asset] || null,
      note: "ololo",
    };
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

function* companyData(action: Action) {
  try {
    const data: CompanyData = yield call(getCompanyData, action.payload);
    yield put(companyDataSuccess(data));
    const from = { value: data.DATE[0], index: 0 };
    const to = {
      value: data.DATE[data.DATE.length - 1],
      index: data.DATE.length - 1,
    };
    yield put(companyPickedFrom(from));
    yield put(companyPickedTo(to));
  } catch (error: any) {
    yield put(companyDataFailed(error));
  }
}

function* companyPickedName(action: Action) {
  yield put(companyDataStart(action.payload));
}

export function* onGetCompanyDataStart() {
  yield takeLatest(ACTION_TYPES.COMPANY.START, companyData);
}

export function* onGetMetaDataStart() {
  yield takeLatest(ACTION_TYPES.META.START, tableData);
}

export function* onGetcompanyPickedName() {
  yield takeEvery(ACTION_TYPES.COMPANY.PICKED_NAME, companyPickedName);
}

export function* dataSaga() {
  yield all([
    call(onGetMetaDataStart),
    call(onGetCompanyDataStart),
    call(onGetcompanyPickedName),
  ]);
}
