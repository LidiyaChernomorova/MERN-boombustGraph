import { META_DATA_ACTION_TYPES } from "./data.type";
import createAction from "../../helpers/create-action";
import MetaDataResp from "../../interfaces/meta-data-resp.interface";

export function metaDataStart() {
  return createAction(META_DATA_ACTION_TYPES.GET.START);
}

export function metaDataSuccess(metaData: MetaDataResp) {
  return createAction<MetaDataResp>(META_DATA_ACTION_TYPES.GET.SUCCESS, metaData);
}

export function metaDataFailed(error: Error) {
  return createAction<Error>(META_DATA_ACTION_TYPES.GET.FAILED, error);
}
