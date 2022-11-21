import { takeLatest, all, call, put } from "redux-saga/effects";
import api from "../../api";
import MetaDataResp from "../../interfaces/meta-data-resp.interface";
import { metaDataFailed, metaDataSuccess } from "./data.action";
import { META_DATA_ACTION_TYPES } from "./data.type";

async function metaDataUser(): Promise<MetaDataResp> {
  const { data } = await api.getMetaData();
  return data;
}

function* metaData() {
  try {
    const data: MetaDataResp = yield call(metaDataUser);
    yield put(metaDataSuccess(data));
  } catch (error: any) {
    yield put(metaDataFailed(error));
  }
}

export function* onSingOutStart() {
  yield takeLatest(META_DATA_ACTION_TYPES.GET.START, metaData);
}

export function* dataSaga() {
  yield all([call(onSingOutStart)]);
}
