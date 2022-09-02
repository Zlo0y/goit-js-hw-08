
const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextFormInput, 500));
form.addEventListener('submit', resetForm);

const STORAGE_KEY = 'feedback-form-state';

const formDataSaved = localStorage.getItem(STORAGE_KEY);
let formData = {};

populateFormData();

function onTextFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function resetForm(e) {
    e.preventDefault();
    form.reset();
    localStorage.removeItem('feedback-form-state');
};

function populateFormData() {
    if (formDataSaved) {
        const formDataParse = JSON.parse(formDataSaved);
        const { email, message } = formDataParse;

        form.elements.email.value = email || null;
        form.elements.message.value = message || null;
        formData = formDataParse;
    }
};