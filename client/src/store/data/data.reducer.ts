import { TABLE_DATA_ACTION_TYPES } from "./data.type";
import DataStore from "../../interfaces/data-store.interface";

const USER_INITIAL_STATE: DataStore = {
  tableData: [],
  isLoading: false,
  selectedCompany: {}
};

export const dataReducer = (
  state = USER_INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case TABLE_DATA_ACTION_TYPES.GET.META.START:
      return { ...state, isLoading: true };
    case TABLE_DATA_ACTION_TYPES.GET.META.SUCCESS:
      return { ...state, tableData: payload, isLoading: false };
    case TABLE_DATA_ACTION_TYPES.GET.META.FAILED:
      return { ...state, error: payload, isLoading: false };
    case TABLE_DATA_ACTION_TYPES.GET.COMPANY.START:
      return { ...state, isLoading: true };
    case TABLE_DATA_ACTION_TYPES.GET.COMPANY.SUCCESS:
      return { ...state, selectedCompany: payload, isLoading: false };
    case TABLE_DATA_ACTION_TYPES.GET.COMPANY.FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
