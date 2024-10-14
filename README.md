# Main Site Frontend

Este proyecto consume un microfrontend llamado **taskManagerFrontend** utilizando **module federation**. A continuación se describen los pasos para construir el microfrontend y cómo ver la aplicación principal que lo consume.

## Requisitos

- Node.js (versión 16 o superior)
- Yarn (gestor de paquetes)
- Nuxt.js (versión 3.13.2 o superior)
- **taskManagerFrontend** ejecutándose localmente

## Pasos para configurar y ejecutar el proyecto

### 1. Clonar y configurar el microfrontend (existe la opción de usar la versión de vercel, descomentando el código en el archivo nuxt.config.ts)

El microfrontend debe estar corriendo localmente para que el **main-site-frontend** pueda consumirlo. Sigue estos pasos en el repositorio del microfrontend:

```bash
# En el repositorio del microfrontend (taskManagerFrontend)
yarn install
yarn build
yarn dev
```

# Main Site Frontend

Este proyecto consume un microfrontend llamado **taskManagerFrontend** utilizando **module federation**. A continuación se describen los pasos para construir el microfrontend y cómo ver la aplicación principal que lo consume.

## Requisitos

- Node.js (versión 16 o superior)
- Yarn (gestor de paquetes)
- Nuxt.js (versión 3.13.2 o superior)
- **taskManagerFrontend** ejecutándose localmente

## Pasos para configurar y ejecutar el proyecto

### 1. Clonar y configurar el microfrontend

El microfrontend debe estar corriendo localmente para que el **main-site-frontend** pueda consumirlo. Sigue estos pasos en el repositorio del microfrontend:

```bash
# En el repositorio del microfrontend (taskManagerFrontend)
yarn install
yarn build
yarn dev
```

Esto levantará el microfrontend en **http://localhost:3000**, que es la URL que el main-site-frontend necesita para consumir el microfrontend.

### 2. Configuración del main-site-frontend

Sigue estos pasos para ejecutar el main-site-frontend:

#### 1. Clona este repositorio:
```bash
git clone https://github.com/sbotargues/main-site-frontend
```

#### 2. Instala las dependencias:
```bash
cd main-site-frontend
yarn install
```

#### 3. Realiza la build del microfrontend
```bash
yarn build
yarn dev
```
Esto generará el archivo **remoteEntry.js** en la ruta **http://localhost:3000/\_nuxt/remoteEntry.js**.

#### 4. Ejecutar el main-site-frontend
```bash
# En el directorio del main-site-frontend
yarn dev
```
El main-site-frontend estará disponible en **http://localhost:3001**.

#### 5. Configuración para consumir el microfrontend desde Vercel (opcional)
Si deseas consumir el microfrontend directamente desde un servidor en la nube como Vercel, simplemente descomenta la línea en la configuración del main-site-frontend:

```bash
// "taskManagerFrontend@https://task-manager-frontend-nu-bice.vercel.app/_nuxt/remoteEntry.js",
```

Esto permitirá consumir el microfrontend desplegado sin necesidad de ejecutarlo localmente.

### Notas adicionales

El main-site-frontend y el taskManagerFrontend deben estar en el mismo entorno de red (localhost) para poder comunicarse correctamente a través de http://localhost:3000 y http://localhost:3001.
Si tienes problemas con CORS, asegúrate de configurar correctamente el servidor backend para permitir peticiones entre **http://localhost:3000** y **http://localhost:3001**.