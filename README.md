# Application d'Authentification Style Facebook

Une application web Flask qui reproduit l'interface de connexion de Facebook avec un système d'authentification complet.

## Fonctionnalités

- Interface utilisateur inspirée de Facebook
- Système d'authentification complet
- Inscription des utilisateurs
- Connexion/Déconnexion
- Base de données SQLite
- Design responsive

## Installation

1. Cloner le repository
```bash
git clone https://github.com/votre-username/votre-repo.git
cd votre-repo
```

2. Installer les dépendances
```bash
pip install -r requirements.txt
```

3. Lancer l'application
```bash
python app.py
```

## Technologies utilisées

- Flask
- Flask-SQLAlchemy
- Flask-Login
- SQLite
- Bootstrap
- HTML/CSS/JavaScript

## Structure du projet

```
.
├── app.py                  # Application principale Flask
├── requirements.txt        # Dépendances Python
├── static/                 # Fichiers statiques (CSS, JS)
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── templates/             # Templates HTML
    ├── base.html
    ├── index.html
    ├── login.html
    ├── register.html
    └── dashboard.html
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.
