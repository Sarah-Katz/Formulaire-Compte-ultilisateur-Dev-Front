const form = document.querySelector('form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const age = document.querySelector('#age');

form.addEventListener('submit', (event) => {
    if (password.value !== confirm.value) {
        event.preventDefault();
        alert('Passwords do not match!');
    }
});

firstname.addEventListener('blur', () => {
    if (!firstname.value) {
        alert('First name is required!');
    }
});

lastname.addEventListener('blur', () => {
    if (!lastname.value) {
        alert('Last name is required!');
    }
});

email.addEventListener('blur', () => {
    if (!email.value) {
        alert('Email is required!');
    }
});

password.addEventListener('blur', () => {
    if (!password.value) {
        alert('Password is required!');
    }
});

confirm.addEventListener('blur', () => {
    if (!confirm.value) {
        alert('Confirm password is required!');
    }
});

age.addEventListener('blur', () => {
    if (!age.value) {
        alert('Age is required!');
    }
});
