# Social Network Flask

Un réseau social inspiré de Facebook, développé avec Flask.

## Fonctionnalités

- 👤 Authentification des utilisateurs (inscription/connexion)
- 📝 Publication de posts avec support d'images
- 💬 Commentaires sur les posts
- ❤️ Système de likes
- 👥 Gestion des amis
- 🔔 Notifications en temps réel
- 📸 Upload de photos de profil
- 🎨 Interface moderne et responsive

## Technologies utilisées

- Python 3.x
- Flask
- SQLAlchemy
- Flask-Login
- Bootstrap 5
- Font Awesome
- SQLite

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/social-network-flask.git
cd social-network-flask
```

2. Installez les dépendances :
```bash
pip install -r requirements.txt
```

3. Créez les dossiers nécessaires :
```bash
mkdir -p static/uploads
```

4. Lancez l'application :
```bash
python app.py
```

5. Ouvrez votre navigateur à l'adresse : `http://localhost:5000`

## Structure du projet

```
social-network-flask/
├── app.py                 # Application Flask principale
├── requirements.txt       # Dépendances Python
├── static/               
│   └── uploads/          # Stockage des images uploadées
└── templates/            # Templates HTML
    ├── base.html         # Template de base
    ├── dashboard.html    # Page principale
    ├── profile.html      # Page de profil
    ├── notifications.html # Page des notifications
    └── ...
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.
