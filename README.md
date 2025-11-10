# 🏠 TireLire, Darna - Front-end

## 📋 Informations du projet

- **Assigné par :** 👤 Zakaria Ziane  
- **Date de création :** 📅 10 Novembre 2025
- **Type de projet :** ⚛️ Développement frontend avec ReactJS
- **Contexte :** 💼 Création d'une application MERN Fullstack

## 🎯 Objectif du projet
Développer l'interface utilisateur frontend d'une plateforme complète combinant :
- **Annonces immobilières** : publication, recherche et gestion d'annonces
- **Épargne collective** : système Daret/Darna pour l'épargne collaborative

L'application doit être **performante**, **accessible**, **responsive** et intégrer des fonctionnalités **temps réel** (chat et notifications).

### 🎓 Problématique
Dans l'écosystème web moderne, il est essentiel de développer des applications web performantes et intuitives, faciles à administrer et à déployer. La stack **MERN** (MongoDB, Express.js, React.js, Node.js) offre une solution optimale en combinant :
- Le rendu côté serveur traditionnel
- La flexibilité et la réactivité de JavaScript et Node.js

## 🎯 Compétences visées
Ce projet vise à développer les compétences suivantes (toutes au **Niveau 2**) :

### 📊 Gestion de projet
- **C1.** Planifier le travail à effectuer individuellement
- **C2.** Contribuer au pilotage de l'organisation du travail individuel et collectif
- **C12.** Contribuer à la gestion d'un projet

### 🔍 Analyse et résolution de problèmes
- **C3.** Définir le périmètre d'un problème rencontré en adoptant une démarche inductive
- **C4.** Rechercher de façon méthodique une ou des solutions au problème rencontré

### 📚 Communication et partage
- **C5.** Partager la solution adoptée en utilisant les moyens de partage de connaissance ou de documentation disponibles
- **C6.** Présenter un travail réalisé en synthétisant ses résultats, sa démarche
- **C8.** Interagir dans un contexte professionnel de façon respectueuse et constructive
- **C9.** Faciliter un temps de travail collectif en assurant une communication constructive entre les participants

### 🏢 Environnement professionnel
- **C7.** Se familiariser avec les codes et la culture propres à son environnement professionnel
- **C10.** Installer et configurer son environnement de travail en fonction du projet

### 💻 Développement technique
- **C11.** Développer des interfaces utilisateur
- **C13.** Analyser les besoins et maquetter une application
- **C14.** Définir l'architecture logicielle d'une application
- **C15.** Préparer et exécuter les plans de tests
- **C16.** Préparer et documenter le déploiement d'une application
- **C17.** Contribuer à la mise en production dans une démarche DevOps

## 🚀 Getting Started
### Prérequis
Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** (version 18.x ou supérieure)
- **npm** ou **yarn** (gestionnaire de paquets)
- **Git** (contrôle de version)
- **Docker** et **Docker Compose** (pour la conteneurisation)
- **Un éditeur de code** (VS Code recommandé)

### Installation
1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/AHLALLAY/TireLire_Darna_Front-end.git
   cd TireLire-Darna-Frontend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   # Éditer le fichier .env avec vos configurations
   ```

4. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Lancer avec Docker**
   ```bash
   docker-compose up -d
   ```

### Commandes disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run start` : Lance l'application en mode production
- `npm run test` : Lance les tests unitaires
- `npm run test:e2e` : Lance les tests end-to-end
- `npm run lint` : Vérifie le code avec ESLint
- `npm run format` : Formate le code avec Prettier

## 📋 Spécifications fonctionnelles
### 🎨 Légende des Acteurs
Les acteurs dans les user stories sont identifiés par des couleurs distinctes :

<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** Utilisateurs généraux</mark> - Visiteurs, utilisateurs authentifiés, utilisateurs enregistrés

<mark style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** Particuliers/Entreprises</mark> - Utilisateurs publiant des annonces

<mark style="background-color: #e8f5e9; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** Utilisateurs (Financement)</mark> - Utilisateurs consultants les services de financement

<mark style="background-color: #f3e5f5; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** Utilisateurs du Chat</mark> - Vendeurs et intéressés en communication

<mark style="background-color: #fff9c4; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** Administrateurs de Groupe</mark> - Créateurs et administrateurs de groupes d'épargne

<mark style="background-color: #e1f5fe; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** Membres de Groupe</mark> - Membres d'un groupe d'épargne collective

<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** Administrateur</mark> - Administrateurs de la plateforme


### 👤 Module 1 : Authentification et Gestion de Compte
>#### Inscription avec email
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** visiteur</mark> **Je veux** créer un compte avec mon email et un mot de passe **Afin de** accéder aux fonctionnalités réservées aux utilisateurs authentifiés

>#### Connexion
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur enregistré</mark> **Je veux** me connecter avec mon email et mot de passe **Afin de** accéder à mon espace personnel

>#### Authentification SSO OAuth
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur</mark> **Je veux** me connecter via SSO OAuth (si disponible) **Afin de** simplifier le processus d'authentification

>#### Vérification email
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** nouvel utilisateur</mark> **Je veux** recevoir et confirmer mon email **Afin de** valider mon compte et sécuriser mon accès

>#### Authentification à deux facteurs (2FA)
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur</mark> **Je veux** activer et utiliser l'authentification à deux facteurs **Afin de** renforcer la sécurité de mon compte

>#### Réinitialisation de mot de passe
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur</mark> **Je veux** réinitialiser mon mot de passe en cas d'oubli **Afin de** récupérer l'accès à mon compte

>#### Gestion de profil
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur authentifié</mark> **Je veux** consulter et modifier mon profil (Particulier, Entreprise) **Afin de** maintenir mes informations à jour

>#### Gestion d'abonnement
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur authentifié</mark> **Je veux** souscrire à un abonnement (gratuit, pro, premium) et voir ses effets (priorité, quotas, badges) **Afin de** bénéficier d'avantages supplémentaires sur la plateforme

### 🏘️ Module 2 : Annonces Immobilières
#### 2.1 Consultation et Recherche
>#### Recherche d'annonces
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** visiteur ou utilisateur authentifié</mark> **Je veux** rechercher des annonces immobilières avec plusieurs critères (mots-clés, localisation, rayon, prix, surface, pièces, équipements, type de transaction) **Afin de** trouver rapidement les biens qui correspondent à mes besoins

>#### Visualisation sur carte
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** visiteur ou utilisateur authentifié</mark> **Je veux** visualiser les annonces sur une carte interactive avec clustering et marqueurs **Afin de** comprendre la localisation géographique des biens et choisir selon leur emplacement

>#### Consultation des détails d'annonce
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** visiteur ou utilisateur authentifié</mark> **Je veux** consulter tous les détails d'une annonce (médias, caractéristiques, diagnostics, disponibilité) **Afin de** prendre une décision éclairée avant de contacter le vendeur

>#### Contact vendeur (Lead)
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** visiteur ou utilisateur authentifié</mark> **Je veux** contacter un vendeur depuis une annonce **Afin de** obtenir plus d'informations et déclencher un lead qui ouvre automatiquement un thread de chat

#### 2.2 Gestion des Annonces
>#### Création d'annonce
<mark style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** particulier ou entreprise</mark> **Je veux** créer une annonce immobilière via un formulaire multi-étapes validé **Afin de** publier mon bien et le mettre en location ou en vente

>#### Édition d'annonce
<mark style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** particulier ou entreprise</mark> **Je veux** modifier mes annonces existantes  **Afin de** mettre à jour les informations ou corriger des erreurs

>#### Gestion des statuts d'annonce
<mark style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** particulier ou entreprise</mark> **Je veux** gérer les statuts de mes annonces (brouillon, publiée, rejetée, promotions) **Afin de** contrôler la visibilité et la publication de mes annonces

### 🖼️ Module 3 : Gestion des Médias
>#### Upload d'images et vidéos
<mark style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** particulier ou entreprise</mark> **Je veux** uploader des images et vidéos via URL présignée MinIO **Afin de** illustrer mes annonces avec des médias de qualité

>#### Aperçu des médias
<mark style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** particulier ou entreprise</mark> **Je veux** voir un aperçu de mes médias uploadés avec barre de progression **Afin de** vérifier que les fichiers sont correctement chargés

>#### Gestion des vignettes
<mark style="background-color: #fff3e0; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** particulier ou entreprise</mark> **Je veux** gérer les vignettes de mes médias **Afin de** choisir les images principales de mes annonces

### ⚡ Module 4 : Communication en Temps Réel
#### 4.1 Notifications

>#### Réception de notifications
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur authentifié</mark> **Je veux** recevoir des notifications en temps réel via WebSocket **Afin de** être informé immédiatement des événements importants (nouveaux leads, messages, etc.)

>#### Centre de notifications
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur authentifié</mark> **Je veux** consulter toutes mes notifications dans un centre dédié et marquer celles non lues **Afin de** suivre l'historique et gérer mes notifications efficacement

#### 4.2 Chat
>#### Chat en temps réel
<mark style="background-color: #f3e5f5; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** vendeur ou intéressé</mark> **Je veux** communiquer en temps réel via un chat **Afin d'** échanger rapidement avec mon interlocuteur

>#### Indicateurs de présence et lecture
<mark style="background-color: #f3e5f5; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur du chat</mark> **Je veux** voir la présence de mon interlocuteur et les accusés de lecture **Afin de** savoir si mon message a été lu et si la personne est disponible

>#### Envoi de fichiers dans le chat
<mark style="background-color: #f3e5f5; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur du chat</mark> **Je veux** envoyer des fichiers dans le chat **Afin de** partager des documents ou images avec mon interlocuteur

### 💳 Module 5 : Financement Immobilier

>#### Consultation des banques partenaires
<mark style="background-color: #e8f5e9; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur</mark> **Je veux** consulter la liste des banques partenaires avec leurs taux indicatifs **Afin de** comparer les offres de financement disponibles

>#### Simulation de crédit
<mark style="background-color: #e8f5e9; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur</mark> **Je veux** utiliser un simulateur de crédit pour calculer mes mensualités **Afin de** évaluer ma capacité d'emprunt et planifier mon projet immobilier

>#### Découverte Tirelire/Daret
<mark style="background-color: #e8f5e9; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur</mark> **Je veux** découvrir le système d'épargne collective Tirelire/Daret **Afin de** comprendre comment épargner collectivement pour mon projet

### 💰 Module 6 : Daret / Darna (Épargne Collective)
#### 6.1 Gestion des Groupes

>#### Liste des groupes d'épargne
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur authentifié</mark> **Je veux** consulter la liste des groupes d'épargne disponibles **Afin de** trouver ou rejoindre un groupe existant

>#### Création d'un groupe
<mark style="background-color: #e3f2fd; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** utilisateur authentifié</mark> **Je veux** créer un nouveau groupe d'épargne avec paramétrage **Afin de** initier un nouveau cycle d'épargne collective

>#### Gestion des membres
<mark style="background-color: #fff9c4; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** créateur ou administrateur de groupe</mark> **Je veux** ajouter, supprimer des membres et gérer leurs rôles **Afin de** organiser efficacement mon groupe d'épargne

#### 6.2 Contributions et Paiements
>#### Gestion des tours de contribution
<mark style="background-color: #e1f5fe; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** membre d'un groupe</mark> **Je veux** voir et gérer les tours de contribution **Afin de** suivre l'ordre des contributions et planifier mes paiements

>#### Calendrier des contributions
<mark style="background-color: #e1f5fe; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** membre d'un groupe</mark> **Je veux** consulter un calendrier avec les étapes de contribution **Afin de** connaître les dates importantes et respecter les échéances

>#### Suivi des paiements
<mark style="background-color: #e1f5fe; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** membre d'un groupe</mark> **Je veux** consulter l'historique complet des paiements avec rappels et notifications **Afin de** suivre la progression de l'épargne collective

>#### Score de fiabilité
<mark style="background-color: #e1f5fe; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** membre d'un groupe</mark> **Je veux** voir le score de fiabilité de chaque membre **Afin de** évaluer la confiance dans le groupe

#### 6.3 Communication et Support
>#### Messagerie de groupe
<mark style="background-color: #e1f5fe; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** membre d'un groupe</mark> **Je veux** communiquer avec le groupe via messagerie (texte et audio si disponible) **Afin de** coordonner les actions et échanger avec les autres membres

>#### Ouverture de ticket
<mark style="background-color: #e1f5fe; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** membre d'un groupe</mark> **Je veux** ouvrir un ticket de support **Afin de** signaler un problème ou obtenir de l'aide

### 🔧 Module 7 : Espace Administrateur
#### 7.1 Tableau de Bord et Statistiques
>#### Tableau de bord statistiques
<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** administrateur</mark> **Je veux** consulter un tableau de bord avec les statistiques clés de la plateforme **Afin de** avoir une vue d'ensemble de l'activité et des performances

#### 7.2 Modération et Contrôle
>#### Modération des annonces
<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** administrateur</mark> **Je veux** valider, rejeter ou modérer les annonces **Afin de** maintenir la qualité et la conformité du contenu

>#### Gestion des signalements
<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** administrateur</mark> **Je veux** traiter les signalements des utilisateurs **Afin de** assurer un environnement sûr et respectueux

#### 7.3 Administration et Configuration
>#### Gestion des plans et tarifs
<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** administrateur</mark> **Je veux** créer et modifier les plans d'abonnement et leurs tarifs **Afin de** gérer l'offre commerciale de la plateforme

>#### Validation KYC entreprises
<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** administrateur</mark> **Je veux** valider les entreprises après vérification KYC **Afin de** garantir la conformité réglementaire

>#### Contrôles KYC particuliers
<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** administrateur</mark> **Je veux** effectuer des contrôles KYC sur les particuliers (workflow manuel si nécessaire) **Afin de** vérifier l'identité et la légitimité des utilisateurs

>#### Consultation des paramètres système
<mark style="background-color: #ffebee; padding: 2px 6px; border-radius: 3px;">**👤 Acteur :** administrateur</mark> **Je veux** consulter les paramètres système (lecture seule si exposés) **Afin de** comprendre la configuration de la plateforme

## 📊 Priorisation des Fonctionnalités
Les fonctionnalités sont classées selon la méthode MoSCoW (Must Have, Should Have, Could Have, Won't Have) :

### 🔴 Must Have (Critique - MVP)
**Module 1 : Authentification**
- Inscription avec email
- Connexion
- Réinitialisation de mot de passe
- Gestion de profil

**Module 2 : Annonces Immobilières**
- Recherche d'annonces
- Consultation des détails d'annonce
- Création d'annonce
- Édition d'annonce
- Contact vendeur (Lead)

**Module 3 : Gestion des Médias**
- Upload d'images et vidéos
- Aperçu des médias

**Module 4 : Communication**
- Chat en temps réel
- Réception de notifications

**Module 7 : Administration**
- Modération des annonces
- Tableau de bord statistiques

### 🟡 Should Have (Important)
**Module 1 : Authentification**
- Vérification email
- Gestion d'abonnement

**Module 2 : Annonces**
- Visualisation sur carte
- Gestion des statuts d'annonce

**Module 3 : Médias**
- Gestion des vignettes

**Module 4 : Communication**
- Centre de notifications
- Indicateurs de présence et lecture

**Module 5 : Financement**
- Consultation des banques partenaires
- Simulation de crédit

**Module 6 : Daret/Darna**
- Liste des groupes d'épargne
- Création d'un groupe
- Suivi des paiements

### 🟢 Could Have (Souhaitable)
**Module 1 : Authentification**
- Authentification SSO OAuth
- Authentification à deux facteurs (2FA)

**Module 4 : Communication**
- Envoi de fichiers dans le chat

**Module 5 : Financement**
- Découverte Tirelire/Daret

**Module 6 : Daret/Darna**
- Gestion des membres
- Gestion des tours de contribution
- Calendrier des contributions
- Score de fiabilité
- Messagerie de groupe
- Ouverture de ticket

**Module 7 : Administration**
- Gestion des signalements
- Gestion des plans et tarifs
- Validation KYC entreprises
- Contrôles KYC particuliers
- Consultation des paramètres système


## ✅ Critères d'Acceptation
### Module 1 : Authentification et Gestion de Compte
#### Inscription avec email
- ✅ L'utilisateur peut créer un compte avec email et mot de passe
- ✅ Le formulaire valide l'email (format valide)
- ✅ Le mot de passe respecte les critères de sécurité (min 8 caractères, majuscule, chiffre)
- ✅ Un message de confirmation s'affiche après l'inscription
- ✅ Les erreurs de validation sont affichées clairement

#### Connexion
- ✅ L'utilisateur peut se connecter avec email et mot de passe
- ✅ Les identifiants incorrects affichent un message d'erreur
- ✅ La session est maintenue après connexion
- ✅ L'utilisateur est redirigé vers son espace personnel

#### Réinitialisation de mot de passe
- ✅ L'utilisateur peut demander une réinitialisation via email
- ✅ Un email de réinitialisation est envoyé
- ✅ Le lien de réinitialisation est valide et sécurisé
- ✅ Le nouveau mot de passe peut être défini

### Module 2 : Annonces Immobilières
#### Recherche d'annonces
- ✅ La recherche fonctionne avec au moins 3 critères simultanés
- ✅ Les résultats se chargent en moins de 2 secondes
- ✅ Les résultats sont pertinents et filtrés correctement
- ✅ Un message s'affiche si aucun résultat n'est trouvé

#### Création d'annonce
- ✅ Le formulaire est divisé en étapes logiques
- ✅ La validation se fait à chaque étape
- ✅ L'utilisateur peut sauvegarder en brouillon
- ✅ L'annonce est créée avec succès après validation complète
- ✅ Un message de confirmation s'affiche

#### Contact vendeur (Lead)
- ✅ Un lead est créé lors du contact
- ✅ Un thread de chat s'ouvre automatiquement
- ✅ Le vendeur reçoit une notification

### Module 3 : Gestion des Médias
#### Upload d'images et vidéos
- ✅ L'upload fonctionne via URL présignée MinIO
- ✅ La barre de progression s'affiche pendant l'upload
- ✅ Les formats acceptés sont validés (JPG, PNG, MP4)
- ✅ La taille maximale est respectée (10MB pour images, 100MB pour vidéos)

### Module 4 : Communication en Temps Réel
#### Chat en temps réel
- ✅ Les messages sont envoyés et reçus en temps réel
- ✅ La connexion WebSocket est stable
- ✅ Les messages sont persistés et affichés dans l'historique
- ✅ L'interface est responsive et intuitive

#### Réception de notifications
- ✅ Les notifications arrivent en temps réel via WebSocket
- ✅ Un badge indique le nombre de notifications non lues
- ✅ Les notifications sont cliquables et redirigent vers la page concernée

### Module 6 : Daret / Darna
#### Création d'un groupe
- ✅ Le formulaire de création est complet et validé
- ✅ Les paramètres du groupe sont sauvegardés
- ✅ Le créateur devient automatiquement administrateur
- ✅ Un message de confirmation s'affiche

#### Suivi des paiements
- ✅ L'historique des paiements est complet et à jour
- ✅ Les rappels sont envoyés automatiquement
- ✅ Les notifications de paiement sont reçues en temps réel

### Module 7 : Espace Administrateur
#### Modération des annonces
- ✅ L'administrateur peut valider, rejeter ou modérer une annonce
- ✅ Les actions sont enregistrées dans l'historique
- ✅ L'utilisateur propriétaire reçoit une notification

#### Tableau de bord statistiques
- ✅ Les statistiques clés sont affichées (nombre d'annonces, utilisateurs, etc.)
- ✅ Les données sont mises à jour en temps réel
- ✅ Les graphiques sont lisibles et interactifs

## 🔗 Matrice de Dépendances
Cette matrice indique les dépendances entre les modules pour planifier le développement :

| Module | Dépend de | Description |
|--------|-----------|-------------|
| **Module 1** : Authentification | - | Module de base, aucune dépendance |
| **Module 2** : Annonces | Module 1 | Nécessite l'authentification pour créer/modifier |
| **Module 3** : Médias | Module 2 | Utilisé lors de la création d'annonces |
| **Module 4** : Communication | Module 1, Module 2 | Nécessite authentification et annonces pour les leads |
| **Module 5** : Financement | Module 1 | Nécessite authentification (optionnel) |
| **Module 6** : Daret/Darna | Module 1, Module 4 | Nécessite authentification et communication |
| **Module 7** : Administration | Module 1, Module 2 | Nécessite authentification admin et annonces |

### Ordre de développement recommandé
1. **Phase 1 (Fondations)**
   - Module 1 : Authentification
   - Module 2 : Annonces (consultation)

2. **Phase 2 (Création de contenu)**
   - Module 2 : Annonces (création/édition)
   - Module 3 : Médias

3. **Phase 3 (Interaction)**
   - Module 4 : Communication
   - Module 2 : Contact vendeur

4. **Phase 4 (Services complémentaires)**
   - Module 5 : Financement
   - Module 6 : Daret/Darna

5. **Phase 5 (Administration)**
   - Module 7 : Espace Administrateur

---

## 📱 Écrans à développer
### 🏠 Pages publiques
- **Page d'accueil** : recherche rapide, sections annonces vedettes/prioritaires
- **Résultats de recherche** : liste et carte interactive
- **Détail d'annonce** : vue complète avec toutes les informations

### 🔐 Authentification
- **Connexion** : formulaire de login
- **Inscription** : formulaire d'enregistrement
- **Vérification email** : page de confirmation
- **Authentification 2FA** : saisie du code à deux facteurs
- **Réinitialisation mot de passe** : récupération de compte
- **Callback SSO** : gestion du retour OAuth

### ✏️ Gestion des annonces
- **Création d'annonce** : formulaire multi-étapes
- **Édition d'annonce** : modification des annonces existantes
- **Mes annonces** : tableau de bord de gestion

### 💼 Communication
- **Leads/Inbox** : boîte de réception des leads
- **Chat thread** : interface de messagerie
- **Centre de notifications** : historique et gestion

### 💳 Financement
- **Banques partenaires** : liste et informations
- **Simulateur de crédit** : outil de calcul

### 💰 Daret / Darna
- **Liste des groupes** : vue d'ensemble
- **Détail de groupe** : informations complètes
- **Création de groupe** : formulaire
- **Contributions** : gestion des paiements
- **Historique** : suivi des transactions
- **Tickets** : système de support

### 👤 Profil utilisateur
- **Profil** : informations personnelles
- **Abonnement** : gestion et souscription

### 🔧 Administration
- **Dashboard admin** : statistiques et vue d'ensemble
- **Modération** : gestion des contenus
- **Plans et tarifs** : administration des abonnements
- **KYC** : validation des utilisateurs
- **Statistiques** : rapports détaillés

### ⚠️ Pages système
- **403** : Accès interdit
- **404** : Page non trouvée
- **500** : Erreur serveur
- **Maintenance** : page de maintenance
- **Consentement cookies/RGPD** : conformité légale

## 📚 Modalités pédagogiques
- **Type de travail :** 👤 Individuel
- **Date limite :** ⏰ 28 Novembre 2025 à midi

## ⏱️ Modalités d'évaluation

L'évaluation dure **25 minutes** et se déroule comme suit :

1. **Démonstration (5 minutes)**
   - Présentation rapide du contenu et des fonctionnalités

2. **Présentation du code (5 minutes)**
   - Affichage du code source
   - Explication brève du fonctionnement

3. **Mise en situation (10 minutes)**
   - Scénarios pratiques et démonstrations

4. **Code Review et Questions (5 minutes)**
   - Revue de code
   - Questions sur la culture web et les bonnes pratiques

## 📦 Livrables attendus
### 🔗 Code source
- **Lien GitHub** : dépôt public de l'application
- **Sources complètes** : code correctement commenté et organisé
- **Qualité du code** : modulaire et respectant les bonnes pratiques

### 📖 Documentation technique
#### Architecture
- **Description de l'architecture** : structure de l'application, choix techniques, diagrammes

#### Installation et configuration
- **Guide d'installation** : étapes détaillées pour mettre en place l'environnement
- **Guide de configuration** : paramétrage de l'application

#### Dépendances
- **Bibliothèques externes** : liste complète avec justifications
- **Documentation des dépendances** : versions, utilités, alternatives considérées

## ✅ Critères de performance
### 📊 Fonctionnalités
- **Taux de complétion** : pourcentage de fonctionnalités implémentées par rapport aux spécifications

### ⚛️ React et Hooks
- **Hooks personnalisés** : maîtrise de la création et de l'utilisation
- **Functional Components** : utilisation exclusive des composants fonctionnels (pas de class components)

### 📋 Gestion de projet
- **Planification JIRA** :
  - Utilisation des Epics
  - Création de User Stories / Tasks et Sub-tasks
  - Intégration JIRA avec GitHub
  - Mise en place de règles d'automatisation

### ⚠️ Gestion des erreurs
- **Gestion des exceptions** : traitement approprié des erreurs
- **Validation UI** : validation des données côté client

### 📁 Organisation du code
- **Structuration du projet** : architecture claire et logique
- **Conventions de nommage** : respect des standards (camelCase, PascalCase, etc.)

### 🐳 Dockerisation
- **Docker Compose** : configuration pour back-end, base de données et front-end
- **Dockerfile** : maîtrise de la création et optimisation
- **Networking** : configuration DNS et communication entre services
- **Volumes** : gestion de la persistance des données
- **Dépendances** : gestion des dépendances entre services

### 🔄 Gestion d'état
- **Redux** : utilisation de Redux pour la gestion des états globaux
- **Architecture Redux** : actions, reducers, store bien structurés

### 🔧 CI/CD
- **GitHub Actions** :
  - Workflow de tests automatisés
  - Push automatique sur Docker Hub
  - Gestion sécurisée des clés secrètes

### 🧪 Tests automatisés
- **Tests E2E** : Playwright ou Selenium
- **Tests unitaires** : Jest pour les composants React
- **Couverture de tests** : taux de couverture acceptable

### 🎨 Qualité du code
- **ESLint** : configuration et respect des règles
- **Prettier** : formatage automatique du code
- **Husky** : hooks Git (pre-commit) pour validation automatique

## 🚀 Technologies et outils
### Frontend
- **ReactJS** : bibliothèque principale
- **Redux** : gestion d'état globale
- **WebSocket** : communication temps réel

### DevOps
- **Docker** : conteneurisation
- **Docker Compose** : orchestration
- **GitHub Actions** : CI/CD

### Qualité
- **ESLint** : linting
- **Prettier** : formatage
- **Husky** : hooks Git

### Tests
- **Playwright / Selenium** : tests E2E
- **Jest** : tests unitaires

### Gestion de projet
- **JIRA** : planification et suivi
- **GitHub** : contrôle de version

## 📖 Glossaire Technique
### Termes Généraux
- **MERN Stack** : Stack technologique composée de MongoDB, Express.js, React.js et Node.js
- **Frontend** : Partie visible et interactive de l'application côté client
- **Backend** : Partie serveur de l'application qui gère la logique métier et les données
- **API** : Interface de programmation applicative permettant la communication entre frontend et backend

### Authentification et Sécurité
- **SSO (Single Sign-On)** : Authentification unique permettant de se connecter à plusieurs services avec un seul compte
- **OAuth** : Protocole d'autorisation permettant d'accéder à des ressources sans partager les identifiants
- **2FA (Two-Factor Authentication)** : Authentification à deux facteurs pour renforcer la sécurité
- **KYC (Know Your Customer)** : Processus de vérification de l'identité des clients

### Technologies Frontend
- **ReactJS** : Bibliothèque JavaScript pour construire des interfaces utilisateur
- **Redux** : Bibliothèque de gestion d'état globale pour applications JavaScript
- **WebSocket** : Protocole de communication bidirectionnel en temps réel
- **Hooks** : Fonctions React permettant d'utiliser l'état et d'autres fonctionnalités sans classes
- **Functional Components** : Composants React écrits comme des fonctions JavaScript

### Stockage et Médias
- **MinIO** : Serveur de stockage d'objets compatible avec Amazon S3
- **URL présignée** : URL temporaire et sécurisée pour l'upload de fichiers
- **Vignette** : Image miniature représentant un média

### Communication
- **Lead** : Contact commercial potentiel généré depuis une annonce
- **Thread de chat** : Conversation entre deux utilisateurs
- **Accusé de lecture** : Confirmation qu'un message a été lu
- **Indicateur de présence** : Statut en ligne/hors ligne d'un utilisateur

### Épargne Collective
- **Daret / Darna** : Système d'épargne collective traditionnel où un groupe épargne ensemble
- **Tour de contribution** : Ordre dans lequel les membres d'un groupe contribuent
- **Score de fiabilité** : Indicateur de confiance basé sur l'historique de paiements

### DevOps et Outils
- **Docker** : Plateforme de conteneurisation d'applications
- **Docker Compose** : Outil pour définir et exécuter des applications Docker multi-conteneurs
- **CI/CD** : Intégration Continue / Déploiement Continu
- **GitHub Actions** : Plateforme d'automatisation des workflows GitHub
- **ESLint** : Outil d'analyse statique du code JavaScript
- **Prettier** : Formateur de code automatique
- **Husky** : Outil pour gérer les hooks Git

### Tests
- **Tests E2E (End-to-End)** : Tests qui vérifient le fonctionnement complet de l'application
- **Tests unitaires** : Tests qui vérifient une fonction ou un composant isolément
- **Jest** : Framework de tests JavaScript
- **Playwright / Selenium** : Outils d'automatisation de tests navigateur

### Gestion de Projet
- **JIRA** : Outil de gestion de projet et suivi des tâches
- **Epic** : Grande fonctionnalité regroupant plusieurs user stories
- **User Story** : Description d'une fonctionnalité du point de vue de l'utilisateur
- **Task / Sub-task** : Tâches et sous-tâches de développement

### Accessibilité
- **WCAG (Web Content Accessibility Guidelines)** : Standards internationaux d'accessibilité web
- **Responsive** : Design adaptatif qui s'ajuste à différentes tailles d'écran

## 📝 Notes importantes
- Le frontend doit s'appuyer **strictement sur l'API existante**
- L'application doit être **performante**, **accessible** et **responsive**
- L'intégration **temps réel** est obligatoire (chat + notifications)
- Respecter les **bonnes pratiques** de développement React
- Assurer la **sécurité** des données utilisateur
- Respecter les **standards d'accessibilité** web (WCAG)

> **📚 Document de référence :** Ce README est la version enrichie et détaillée du document original `README_ORIGINAL.md`. Le document original est conservé tel quel pour référence historique, tandis que ce document contient les spécifications fonctionnelles complètes, les critères d'acceptation, la priorisation des fonctionnalités (MoSCoW) et les guides nécessaires à l'implémentation du projet.

**Bon développement ! 🚀**