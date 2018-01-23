/* global $ */

const endpoint =
  'https://gl4n08hxtb.execute-api.us-east-1.amazonaws.com/dev/form';

(function init() {
  const formEl = $('form#form');
  formEl.submit(event => {
    event.preventDefault();
    $.post(endpoint, formEl.serialize(), data => {
      console.log('success:', data);
    }).fail(() => {
      console.log('error');
    });
  });
})();
