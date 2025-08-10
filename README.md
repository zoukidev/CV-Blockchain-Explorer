# CV-Blockchain Explorer 🔍

Un explorateur web moderne pour visualiser et interagir avec votre CV-Blockchain. Cette interface utilisateur permet d'explorer facilement les blocs de votre parcours professionnel stockés dans la blockchain.

## 🎯 Concept

Cet explorateur est conçu pour fonctionner avec [CV-Blockchain](https://github.com/zoukidev/CV-Blockchain), offrant une interface utilisateur intuitive pour :
- Visualiser l'ensemble de la chaîne de blocs
- Explorer les détails de chaque bloc
- Miner de nouveaux blocs
- Consulter les tokens de récompense

## 🛠️ Technologies

- **React** - Bibliothèque UI
- **Vite** - Outil de build
- **Redux Toolkit** - Gestion d'état
- **TailwindCSS** - Styles
- **React Router** - Navigation

## 🚀 Installation

```bash
# Cloner le projet
git clone <votre-repo>
cd cv-blockchain-explorer

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 📱 Fonctionnalités

- **Vue d'ensemble de la blockchain** : Visualisation claire de tous les blocs
- **Détails des blocs** : Affichage détaillé de chaque bloc (hash, données, mineur, etc.)
- **Interface de minage** : Formulaire simplifié pour ajouter de nouveaux blocs
- **Liste des tokens** : Visualisation des tokens de récompense générés
- **Design responsive** : Interface adaptative pour tous les appareils

## 🔗 Configuration

Assurez-vous que l'API CV-Blockchain est en cours d'exécution sur votre machine locale. Par défaut, l'explorateur se connectera à `http://localhost:5000`.

## 📚 Structure du projet

```
src/
├── components/     # Composants réutilisables
├── pages/         # Pages de l'application
├── redux/         # Configuration et slices Redux
├── services/      # Services API
└── assets/        # Ressources statiques
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le design
- Optimiser les performances

## 📄 Licence

Ce projet est open source. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.

---

💡 *"Explorez votre parcours professionnel d'une manière moderne et interactive !"*

