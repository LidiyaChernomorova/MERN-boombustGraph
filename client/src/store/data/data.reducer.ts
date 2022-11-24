import { ACTION_TYPES } from "./data.type";
import DataStore from "../../interfaces/data-store.interface";
import Action from "../../interfaces/action.interface";

const USER_INITIAL_STATE: DataStore = {
  tableData: [],
  tableDataNotes: [],
  notesIsLoading: false,
  tableIsLoading: false,
  companyIsLoading: false,
  companyPicked: null,
  companyPickedName: "",
  companyPickedFrom: { value: "", index: 0 },
  companyPickedTo: { value: "", index: 0 },
};

export const dataReducer = (state = USER_INITIAL_STATE, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.NOTE.START:
      return { ...state, notesIsLoading: true };
    case ACTION_TYPES.NOTE.SUCCESS:
      return { ...state, tableDataNotes: payload, notesIsLoading: false };
    case ACTION_TYPES.NOTE.FAILED:
      return { ...state, error: payload, notesIsLoading: false };
    case ACTION_TYPES.META.START:
      return { ...state, tableIsLoading: true };
    case ACTION_TYPES.META.SUCCESS:
      return { ...state, tableData: payload, tableIsLoading: false };
    case ACTION_TYPES.META.FAILED:
      return { ...state, error: payload, tableIsLoading: false };
    case ACTION_TYPES.COMPANY.START:
      return { ...state, companyIsLoading: true };
    case ACTION_TYPES.COMPANY.SUCCESS:
      return { ...state, companyPicked: payload, companyIsLoading: false };
    case ACTION_TYPES.COMPANY.FAILED:
      return { ...state, error: payload, companyIsLoading: false };
    case ACTION_TYPES.COMPANY.PICKED_NAME:
      return { ...state, companyPickedName: payload };
    case ACTION_TYPES.COMPANY.PICKED_FROM:
      return { ...state, companyPickedFrom: payload };
    case ACTION_TYPES.COMPANY.PICKED_TO:
      return { ...state, companyPickedTo: payload };
    default:
      return state;
  }
};
