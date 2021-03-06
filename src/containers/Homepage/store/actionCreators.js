import * as Action from "./actionTypes";

export const getCoordinates = () => dispatch => {
  try {
    const coordinates = cordinates
    dispatch({ coordinates, type: Action.GET_ALL_CORDINATES_SUCCESS });
  } catch (e) {
    dispatch({ type: Action.GET_ALL_CORDINATES_FAILURE });
  }
};

export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};

const cordinates = [
  {
    "x": 47.037,
    "y": 41.927
  },
  {
    "x": 43.056,
    "y": 42.708
  },
  {
    "x": 39.444,
    "y": 45.104
  },
  {
    "x": 37.685,
    "y": 46.979
  },
  {
    "x": 35.278,
    "y": 50.156
  },
  {
    "x": 36.204,
    "y": 52.448
  },
  {
    "x": 38.889,
    "y": 55.469
  },
  {
    "x": 42.685,
    "y": 57.76
  },
  {
    "x": 45.741,
    "y": 58.75
  },
  {
    "x": 53.981,
    "y": 59.167
  },
  {
    "x": 56.111,
    "y": 56.667
  },
  {
    "x": 57.685,
    "y": 54.375
  },
  {
    "x": 58.704,
    "y": 51.719
  },
  {
    "x": 58.796,
    "y": 48.49
  },
  {
    "x": 57.315,
    "y": 44.844
  },
  {
    "x": 53.796,
    "y": 43.073
  },
  {
    "x": 50.926,
    "y": 42.031
  }
]