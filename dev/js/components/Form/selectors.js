import { createSelector } from 'reselect';

const selectForm = (state) => state.get('formData');

const makeSelectFormData = () => createSelector(
  selectForm,
  (formState) => formState.get('firstname')
);

export {
  selectForm,
  makeSelectFormData,
};
