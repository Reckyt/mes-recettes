# Utiliser une image de base officielle Node.js
FROM node:18 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Utiliser une image de base Nginx pour servir l'application
FROM nginx:alpine

# Supprimer le contenu par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers de build de l'étape précédente dans le répertoire par défaut de Nginx
COPY --from=build usr/src/app/dist/recettes /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

# Exposer le port sur lequel Nginx écoute
EXPOSE 80

# Commande pour démarrer Nginx
# CMD ["nginx", "-g", "daemon off;"]
