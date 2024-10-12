# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (o yarn.lock) al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el resto del código de la aplicación al contenedor
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
