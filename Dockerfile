# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Instala Bun
RUN curl -fsSL https://bun.sh/install | bash

# Agrega Bun al PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo bun.lockb y package.json al contenedor
COPY bun.lockb ./
COPY package.json ./

# Instala las dependencias
RUN bun install

# Copia todo el resto del código de la aplicación al contenedor
COPY . .

# Construye la aplicación
RUN bun build

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["bun", "start"]
