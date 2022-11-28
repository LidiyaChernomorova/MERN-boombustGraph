import { ACTION_TYPES } from "./data.type";
import DataStore from "../../interfaces/data-store.interface";
import Action from "../../interfaces/action.interface";

const USER_INITIAL_STATE: DataStore = {
  tableData: [],
  tableDataNotes: [],
  notesIsLoading: false,
  tableIsLoading: false,
  companyIsLoading: false,
  company: null,
  companyName: "",
  companyCompareName: "",
  companyCompare: null,
  from: { value: "", index: 0 },
  to: { value: "", index: 0 },
};

export const dataReducer = (state = USER_INITIAL_STATE, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    // NOTE
    case ACTION_TYPES.NOTE.START:
      return { ...state, notesIsLoading: true };
    case ACTION_TYPES.NOTE.SUCCESS:
      return { ...state, tableDataNotes: payload, notesIsLoading: false };
    case ACTION_TYPES.NOTE.FAILED:
      return { ...state, error: payload, notesIsLoading: false };

    // META
    case ACTION_TYPES.META.START:
      return { ...state, tableIsLoading: true };
    case ACTION_TYPES.META.SUCCESS:
      return { ...state, tableData: payload, tableIsLoading: false };
    case ACTION_TYPES.META.FAILED:
      return { ...state, error: payload, tableIsLoading: false };

    // COMPANY
    case ACTION_TYPES.COMPANY.START:
      return { ...state, companyIsLoading: true };
    case ACTION_TYPES.COMPANY.SUCCESS:
      return { ...state, company: payload, companyIsLoading: false };
    case ACTION_TYPES.COMPANY.FAILED:
      return { ...state, error: payload, companyIsLoading: false };
    case ACTION_TYPES.COMPANY.NAME:
      return { ...state, companyName: payload };

    // INPUTS
    case ACTION_TYPES.COMPANY.FROM:
      return { ...state, from: payload };
    case ACTION_TYPES.COMPANY.TO:
      return { ...state, to: payload };
    case ACTION_TYPES.COMPANY.COMPARE_NAME:
      return { ...state, companyCompareName: payload };

    default:
      return state;
  }
};
