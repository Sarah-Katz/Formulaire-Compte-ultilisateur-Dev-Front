const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const birthdate = document.getElementById('age');
const formSubmit = document.getElementById('submit');



form.addEventListener("submit", (event) => {
    event.preventDefault();
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const birthYear = new Date(birthdate.valueAsNumber).getFullYear();
    const birthMonth = new Date(birthdate.valueAsNumber).getMonth();
    const birthDate = new Date(birthdate.valueAsNumber).getDate();

    if (year - birthYear < 13 || (year - birthYear === 13 && month < birthMonth) || (year - birthYear === 13 && month === birthMonth && date < birthDate)) {
        alert("Vous devez avoir au moins 13 ans pour vous inscrire.");
    } else if (password.value !== confirm.value) {
        alert("Les mots de passe ne correspondent pas.");
    } else {
        form.submit();
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

birthdate.addEventListener('blur', () => {
    if (!birthdate.value) {
        alert('Entrez votre date de naissance!');
    }
});

