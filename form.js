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
        alert('Les mots de passe ne correspondent pas');
    }
});

firstname.addEventListener('blur', () => {
    if (!firstname.value) {
        alert('Entrez un prénom!');
    }
});

lastname.addEventListener('blur', () => {
    if (!lastname.value) {
        alert('Entrez un nom!');
    }
});

email.addEventListener('blur', () => {
    if (!email.value) {
        alert('Entrez une adresse mail');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert("L'adresse mail n'est pas valide!");
    }
});

password.addEventListener('blur', () => {
    if (!password.value) {
        alert('Entrez un mot de passe!');
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.value)) {
        alert('Le mot de passe doit contenir au moins 8 caractères, au moins une majuscule, au moins une minuscule, et au moins un chiffre!');
    }
});

confirm.addEventListener('blur', () => {
    if (!confirm.value) {
        alert('Confirmez votre mot de passe!');
    }
});

age.addEventListener('blur', () => {
    if (!age.value) {
        alert('Entrez votre date de naissance!');
    }
});
