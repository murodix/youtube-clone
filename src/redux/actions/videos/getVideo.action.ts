import YoutubeApi from "../../../api/YoutubeApi";
import {
  GET_VIDEO_FAIL,
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
} from "../../actionType";

const getVideo = (videoId: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_VIDEO_REQUEST,
    });

    const { data } = await YoutubeApi("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        id: videoId,
      },
    });

    dispatch({
      type: GET_VIDEO_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_VIDEO_FAIL,
      error: error.message,
    });
  }
};

export default getVideo;
