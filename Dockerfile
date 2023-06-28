# Utiliza una imagen base con Node.js y npm preinstalados
FROM node:19.8.1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY ./src ./src
COPY ./public ./public

# Construye la aplicación de React
RUN npm run build

# Instala un servidor web para servir la aplicación
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules
# Expone el puerto en el que se servirá la aplicación
EXPOSE 3000

# Comando para ejecutar el servidor web y servir la aplicación
CMD ["serve", "-s", "build"]
