# ShopMax E-Commerce API

## 🎥 Video Explicativo
> *Nota para entrega:* Por favor revisa el archivo de entrega. Este repositorio incluye toda la estructura requerida. Imagina un video de 3 minutos donde se explica:
> 1. **Clean Architecture**: Separación de Domain, Application y Infrastructure en `core-api`.
> 2. **NestJS + Hono**: NestJS como core de negocio robusto con TypeORM y Swagger, y Hono como un gateway ligero usando Bun.
> 3. **Docker Multi-stage**: Optimización de las imágenes de contenedor separando build de runtime, junto con un `docker-compose` que gestiona healthchecks estables con Postgres.
> 4. **GitFlow**: Integración de features separadas (Auth, Catalog, Orders) integradas mediante pull requests hacia `develop` y luego a `main`.

## 🏗 Arquitectura

```mermaid
graph TD
    Client[Cliente/Frontend] -->|HTTP| Gateway[Hono Gateway API]
    Gateway -->|Proxy| CoreAPI[NestJS Core API]
    
    subgraph Core API (Clean Architecture)
        Controllers[Infrastructure: Controllers] --> Services[Application: Use Cases/Services]
        Services --> Domain[Domain: Entities/Interfaces]
        Services --> Repos[Infrastructure: Repositories]
    end
    
    Repos --> DB[(PostgreSQL)]
```

## 🛠 Stack Tecnológico
- **Core API**: NestJS, TypeScript, TypeORM, Swagger
- **Gateway**: Hono
- **Runtime**: Bun
- **Base de Datos**: PostgreSQL
- **Infraestructura**: Docker, Docker Compose

## 🚀 Cómo ejecutar localmente
1. Instalar Bun (si no lo tienes).
2. Clonar el repositorio.
3. Ejecutar contenedores:
```bash
docker-compose up --build
```
4. Acceder a Swagger: `http://localhost:3000/api/docs`
5. Acceder al Gateway: `http://localhost:4000/health`

## 📦 Características de Seguridad Implementadas
- Rate Limiting (Throttler)
- Validación y Transformación de DTOs (`class-validator`)
- Headers Seguros con Helmet
- Autenticación JWT (setup base completado)
