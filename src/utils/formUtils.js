import _ from 'lodash';

export const submitListener = (e, submitCallback) => {
  if (e.key === 'Enter' && e.shiftKey === false) {
    e.preventDefault();
    submitCallback();
  }
};

export const scrollToInvalid = errors => {
  if (errors) {
    const invalidInput = _.findKey(errors, key => key !== undefined);
    if (document.getElementsByName(invalidInput)[0]) {
      window.scrollTo(
        0,
        window.pageYOffset + (document.getElementsByName(invalidInput)[0].getBoundingClientRect().top - 100)
      );
    }
  }
};

export const shouldShowErrors = meta =>
  (!meta.active || (meta.active && meta.submitFailed)) && meta.invalid && meta.submitFailed;
