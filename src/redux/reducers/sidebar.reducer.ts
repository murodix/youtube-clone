import { TOGGLE_SIDEBAR } from "../actionType";

const initialState = {
    isExpanded: true,
};

export const toggleSideBarReducer = (state = initialState, action: any) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isExpanded: !state.isExpanded,
      };

    default:
      return state;
  }
};
