import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../api";
import TableData from "../../interfaces/table-data.interface";
import MetaDataResp from "../../interfaces/meta-data-resp.interface";
import {
  tableDataFailed,
  tableDataSuccess,
  companyDataSuccess,
  companyDataFailed,
} from "./data.action";
import { TABLE_DATA_ACTION_TYPES } from "./data.type";
import CompanyData from "../../interfaces/company-data.interface";

async function getMetaData(): Promise<TableData[]> {
  const { data } = await api.getMetaData();
  return createTableData(data);
}

async function getCompanyData(companyName: string): Promise<CompanyData> {
  const { data } = await api.getCompanyData(companyName);
  return makeData(data);
}

export function makeData(data: CompanyData): any {
  // replase this obj to conponent no need to keep it in store
  const defaultSettings = {
    decreasing: { line: { color: "#d70200" } },
    increasing: { line: { color: "#6ba583" } },
    type: "ohlc" as "ohcl",
    xaxis: "x",
    yaxis: "y",
  };

  return [
    {
      ...defaultSettings,
      x: data.DATE,
      open: data.OPEN,
      close: data.CLOSE,
      high: data.HIGH,
      low: data.LOW,
    },
  ];
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

function* companyData(action: { type: string; payload: any }) {
  try {
    const data: CompanyData = yield call(getCompanyData, action.payload);
    yield put(companyDataSuccess(data));
  } catch (error: any) {
    yield put(companyDataFailed(error));
  }
}

export function* onGetCompanyDataStart() {
  yield takeLatest(TABLE_DATA_ACTION_TYPES.GET.COMPANY.START, companyData);
}

export function* onGetMetaDataStart() {
  yield takeLatest(TABLE_DATA_ACTION_TYPES.GET.META.START, tableData);
}

export function* dataSaga() {
  yield all([call(onGetMetaDataStart), call(onGetCompanyDataStart)]);
}
