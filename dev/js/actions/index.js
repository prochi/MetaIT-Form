export const CHANGE_FIRSTNAME = "CHANGE_FIRSTNAME";
export const CHANGE_SURNAME = "CHANGE_SURNAME";
export const SELECT_AGEGROUP = "SELECT_AGEGROUP";
export const CHANGE_SEX = "CHANGE_SEX";
export const CHANGE_HOBBY = "CHANGE_HOBBY";
export const NEXT_STEP = "NEXT_STEP";
export const START = "START";

export const changeFirstname = (firstname) => {
  return {
    type: "CHANGE_FIRSTNAME",
    firstname,
  }
};

export function changeSurname(surname) {
  return {
    type: "CHANGE_SURNAME",
    surname,
  };
}

export function changeSex(sex) {
  return {
    type: "CHANGE_SEX",
    sex,
  };
}

export function changeHobby(hobby) {
  return {
    type: "CHANGE_HOBBY",
    hobby,
  };
}

export function nextStep(step) {
  return {
    type: "NEXT_STEP",
    step,
  };
}

export function start(step) {
  return {
    type: "START",
    step,
  };
}

export function selectAgeGroup(agegroup) {
  return {
    type: "SELECT_AGEGROUP",
    agegroup,
  };
}