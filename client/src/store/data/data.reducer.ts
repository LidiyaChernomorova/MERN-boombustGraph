import { TABLE_DATA_ACTION_TYPES } from "./data.type";
import DataStore from "../../interfaces/data-store.interface";

const USER_INITIAL_STATE: DataStore = {
  tableData: [],
  isLoading: false,
  CompanyPicked: null,
  CompanyPickedName: "",
};

export const dataReducer = (
  state = USER_INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case TABLE_DATA_ACTION_TYPES.META.START:
      return { ...state, isLoading: true };
    case TABLE_DATA_ACTION_TYPES.META.SUCCESS:
      return { ...state, tableData: payload, isLoading: false };
    case TABLE_DATA_ACTION_TYPES.META.FAILED:
      return { ...state, error: payload, isLoading: false };
    case TABLE_DATA_ACTION_TYPES.COMPANY.START:
      return { ...state, isLoading: true };
    case TABLE_DATA_ACTION_TYPES.COMPANY.SUCCESS:
      return { ...state, CompanyPicked: payload, isLoading: false };
    case TABLE_DATA_ACTION_TYPES.COMPANY.FAILED:
      return { ...state, error: payload, isLoading: false };
    case TABLE_DATA_ACTION_TYPES.COMPANY.PICKED_NAME:
      return { ...state, CompanyPicked: payload, isLoading: false };
    default:
      return state;
  }
};
