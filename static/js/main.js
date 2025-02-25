// Fonction pour faire disparaître les messages flash après 3 secondes
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const alerts = document.getElementsByClassName('alert');
        for(let alert of alerts) {
            alert.style.transition = 'opacity 0.5s ease';
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 500);
        }
    }, 3000);
});

// Validation du formulaire d'inscription
const registerForm = document.querySelector('form[action="/register"]');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            e.preventDefault();
            alert('Le mot de passe doit contenir au moins 6 caractères');
        }
    });
}
