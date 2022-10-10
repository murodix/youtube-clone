import { SET_SEARCH } from "../../actionType";

export const setSearch = (value: String) => (dispatch: any) => {
  dispatch({
    type: SET_SEARCH,
    payload: value,
  });
};
