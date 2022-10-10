import { TOGGLE_SIDEBAR } from "../../actionType";

export const toggleSideBar = () => (dispatch: any) => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  });
};
