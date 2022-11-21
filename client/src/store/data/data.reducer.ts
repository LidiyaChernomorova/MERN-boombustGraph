import { META_DATA_ACTION_TYPES } from "./data.type";
const USER_INITIAL_STATE = {
  metaData: null,
  isLoading: false,
};

export const dataReducer = (
  state = USER_INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case META_DATA_ACTION_TYPES.GET.START:
      return { ...state, isLoading: true };
    case META_DATA_ACTION_TYPES.GET.SUCCESS:
      return { ...state, metaData: payload, isLoading: false };
    case META_DATA_ACTION_TYPES.GET.FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
