# 📌 Social-Posts-API

## 📖 Descripción
Social-Posts-API es una API REST desarrollada con Node.js y Express, diseñada para la gestión de publicaciones (posts) almacenadas en una base de datos PostgreSQL.

## 🚀 Tecnologías utilizadas
- Node.js
- Express
- PostgreSQL
- dotenv
- CORS
- uuid

## 📦 Instalación
1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd social-posts-api
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias para la conexión a la base de datos PostgreSQL.

## ▶️ Uso
### Iniciar el servidor en modo desarrollo
```bash
npm run dev
```
### Iniciar el servidor en modo producción
```bash
npm start
```

## 📡 Endpoints

### 📌 Rutas disponibles

#### 🔹 GET /posts
Obtiene todos los posts almacenados en la base de datos.

#### 🔹 POST /posts
Crea un nuevo post.

**Body:**
```json
{
  "titulo": "Ejemplo de título",
  "img": "URL de la imagen",
  "descripcion": "Descripción del post",
  "likes": 0
}
```

#### 🔹 PUT /posts/:id
Actualiza un post existente.

**Body:**
```json
{
  "titulo": "Nuevo título",
  "img": "Nueva URL de imagen",
  "descripcion": "Nueva descripción",
  "likes": 5
}
```

#### 🔹 DELETE /posts/:id
Elimina un post por su ID.

#### 🔹 PATCH /posts/:id/like
Incrementa en 1 el contador de likes del post especificado.

## 🛠 Configuración de la base de datos
Este proyecto utiliza PostgreSQL. Asegúrate de configurar correctamente las credenciales en el archivo `.env` y de que la base de datos esté en funcionamiento.

## 📜 Licencia
Este proyecto está bajo la licencia ISC.

---
✨ Desarrollado con Node.js y Express.

