import { SET_SEARCH } from "../actionType";

const initialState = {
  searchValue: null,
};

export const searchReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: payload,
      };

    default:
      return state;
  }
};
