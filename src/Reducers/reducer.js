import {
  ADD_NEW_SUBJECT,
  ADD_STD,
  REMOVE_STUDENT,
  UPDATE_STD,
} from "./actions/types";

const initialState = {
  students: [],
  skills: [
    {
      id: 1,
      name: "Data Structures",
    },
    {
      id: 2,
      name: "Algorithms",
    },
    {
      id: 3,
      name: "React.Js",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STD:
      return {
        ...state,
        students: [
          ...state.students,
          { ...action.payload, id: state.students.length + 1, skills: [] },
        ],
      };

    case UPDATE_STD:
      const newStudentsList = state.students.map((student) =>
        student.id === action.payload.id
          ? { ...student, [action.payload.key]: action.payload.value }
          : { ...student }
      );
      return { ...state, students: newStudentsList };

    case ADD_NEW_SUBJECT:
      const getSubject = state.skills.filter(
        (subj) => subj.id === action.payload.skills
      );
      const newStudents = state.students.map((student) =>
        student.id === action.payload.id
          ? {
              ...student,
              skills: [
                ...student.skills,
                { name: getSubject[0].name, degree: action.payload.degree },
              ],
            }
          : { ...student }
      );
      return { ...state, students: newStudents };

    case REMOVE_STUDENT:
      return {
        ...state,
        students: [
          ...state.students.filter((student) => student.is !== action.payload),
        ],
      };

    default:
      return state;
  }
}
