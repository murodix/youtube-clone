import {
  GET_VIDEO_FAIL,
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
} from "../actionType";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const getVideoReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GET_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case GET_VIDEO_FAIL:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
