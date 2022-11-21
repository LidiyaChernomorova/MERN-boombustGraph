import { all, call } from "redux-saga/effects";
import { dataSaga } from "./data/data.saga";

export function* rootSaga() {
  yield all([call(dataSaga)]);
}
