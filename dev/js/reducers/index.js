import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import ageGroupReducer from './reducer-age-group';
import hobbyOptionReducer from './reducer-hobby-option';

const initialState = fromJS({
  step: 1,
  firstname: '',
  surname: '',
  agegroup: 'Pod 18 let',
  sex: 'Muž',
  hobby: '',
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FIRSTNAME":
      return state
        .set('firstname', action.firstname);
    case "CHANGE_SURNAME":
      return state
        .set('surname', action.surname);
    case "SELECT_AGEGROUP":
      return state
        .set('agegroup', action.agegroup);
    case "CHANGE_SEX":
      return state
        .set('sex', action.sex);
    case "CHANGE_HOBBY":
      return state
        .set('hobby', action.hobby);
    case "NEXT_STEP":
      return state
        .set('step', action.step);
    case "START":
      return state
        .set('step', action.step);
    default:
      return state;
  }
}

export default function createReducer() {
  return combineReducers({
    main: mainReducer,
    ageGroup: ageGroupReducer,
    hobbyOption: hobbyOptionReducer,
  });
}