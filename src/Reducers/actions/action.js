import { ADD_STD, REMOVE_STUDENT, UPDATE_STD } from "./types";

export const addNewStudent = (data) => {
  return function (dispatch) {
    dispatch({ type: ADD_STD, payload: data });
  };
};

export const updateStudentData = ({ id, key, value }) => {
  return function (dispatch) {
    dispatch({ type: UPDATE_STD, payload: { id, key, value } });
  };
};

export const removeStudent = ({ id }) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_STUDENT, payload: id });
  };
};
