import { call, put } from "redux-saga/effects";
import api from "../../api";
import TableData from "../../interfaces/table-data.interface";
import {
  tableDataFailed,
  tableDataSuccess,
  setCompanyStart,
  setCompanySuccess,
  setCompanyFailed,
  setCompanyCompareStart,
  setCompanyCompareSuccess,
  setCompanyCompareFailed,
  setFrom,
  setTo,
  noteDataFailed,
  noteDataSuccess,
} from "./data.action";
import CompanyData from "../../interfaces/company-data.interface";
import Action from "../../interfaces/action.interface";
import NoteData from "../../interfaces/notes-data.interface";

async function getMetaData(): Promise<TableData[]> {
  const { data } = await api.getMetaData();
  const fullNames = Object.keys(data.FULL_NAMES);
  const intervales = data.INTERVALES;

  const tableData = fullNames.map((asset) => {
    return {
      asset,
      name: data.FULL_NAMES[asset],
      date: intervales[asset] || null,
    };
  });

  return tableData;
}

async function getCompanyData(companyName: string): Promise<CompanyData> {
  const { data } = await api.getCompanyData(companyName);
  return data;
}

async function getNotes(): Promise<NoteData[]> {
  const { data } = await api.getAllNotes();
  return data.notes;
}

// HELPES TO EXPORT

function* companyStart(action: Action) {
  try {
    const data: CompanyData = yield call(getCompanyData, action.payload);
    yield put(setCompanySuccess(data));
    const from = { value: data.DATE[0], index: 0 };
    const to = {
      value: data.DATE[data.DATE.length - 1],
      index: data.DATE.length - 1,
    };
    yield put(setFrom(from));
    yield put(setTo(to));
  } catch (error: any) {
    yield put(setCompanyFailed(error));
  }
}

function* companyCompareStart(action: Action) {
  try {
    const data: CompanyData = yield call(getCompanyData, action.payload);
    yield put(setCompanyCompareSuccess(data));
    // const from = { value: data.DATE[0], index: 0 };
    // const to = {
    //   value: data.DATE[data.DATE.length - 1],
    //   index: data.DATE.length - 1,
    // };
    // yield put(setFrom(from));
    // yield put(setTo(to));
  } catch (error: any) {
    yield put(setCompanyCompareFailed(error));
  }
}

function* tableData() {
  try {
    const data: TableData = yield call(getMetaData);
    yield put(tableDataSuccess(data));
  } catch (error: any) {
    yield put(tableDataFailed(error));
  }
}

function* companyName(action: Action) {
  yield put(setCompanyStart(action.payload));
}

function* companyCompareName(action: Action) {
  if (action.payload) {
    yield put(setCompanyCompareStart(action.payload));
  } else {
    yield put(setCompanyCompareSuccess(null));
  }
}

function* noteDataStart() {
  try {
    const data: NoteData[] = yield call(getNotes);
    yield put(noteDataSuccess(data));
  } catch (error: any) {
    yield put(noteDataFailed(error));
  }
}

const helpers = {
  companyStart,
  tableData,
  companyName,
  noteDataStart,
  companyCompareName,
  companyCompareStart,
};

export default helpers;
