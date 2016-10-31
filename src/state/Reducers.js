import initialState from './InitialState';
import purefunctions from '../Pure'

function reducers(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'newName':
      newState.newName = action.value;
      return newState;
    case 'newGrade':
      newState.newGrade = action.value;
      return newState;
    case 'addGrade':
      let gradesArray = state.grades.concat([action.value])
      newState.grades = gradesArray;
      newState.flattenedGrades = purefunctions.flattenGrades(gradesArray);
      return newState;
    case 'updateName':
      newState.grades[action.value.Key].Name = action.value.Name;
      return newState;
    case 'updateGrade':
      newState.grades[action.value.Key].Grade = action.value.Grade;
      return newState;
    case 'error':
      newState.error = action.value;
      return newState;
    default:
      return state;
  }

}

export default reducers;
