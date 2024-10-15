# Start Generation Here
FROM node:20

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar bun
RUN npm install -g bun

# Instalar las dependencias con bun
RUN bun install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN bun run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["bun", "run", ".output/server/index.mjs"]
# End Generation Here
