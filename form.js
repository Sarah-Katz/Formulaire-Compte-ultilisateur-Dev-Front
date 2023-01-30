const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const birthdate = document.getElementById('age');
const formSubmit = document.getElementById('submit');


function calculateAge(date) 
{
  const now = new Date();
  const diff = Math.abs(now - date );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  return age
}

form.addEventListener('submit', (event) => {
    let age = calculateAge(birthdate.value);
    if (password.value !== confirm.value) {
        event.preventDefault();
        alert('Les mots de passe ne correspondent pas');
    } else if (age < 13) {
        alert('')
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

