import { takeLatest, all, call, takeEvery } from "redux-saga/effects";
import { ACTION_TYPES } from "./data.type";
import helpers from "./saga-helpers";

export function* onCompanyDataStart() {
  yield takeLatest(ACTION_TYPES.COMPANY.START, helpers.companyData);
}

export function* onMetaDataStart() {
  yield takeLatest(ACTION_TYPES.META.START, helpers.tableData);
}

export function* onСompanyPickedName() {
  yield takeEvery(ACTION_TYPES.COMPANY.NAME, helpers.companyName);
}

export function* onNoteDataStart() {
  yield takeLatest(ACTION_TYPES.NOTE.START, helpers.noteDataStart);
}


export function* dataSaga() {
  yield all([
    call(onCompanyDataStart),
    call(onMetaDataStart),
    call(onСompanyPickedName),
    call(onNoteDataStart),
  ]);
}
