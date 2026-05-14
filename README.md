# ShopMax E-Commerce API

## Descripción

ShopMax API es una solución robusta y escalable para el comercio electrónico, diseñada bajo los principios de **Clean Architecture**. Esta API proporciona una base sólida para la gestión de productos, carritos, órdenes y autenticación, asegurando una separación clara entre las reglas de negocio y la infraestructura técnica.

El proyecto utiliza un enfoque de microservicios ligeros, combinando la potencia de **NestJS** para el núcleo del negocio y **Hono** como un gateway de API de alto rendimiento.

## Arquitectura

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

## Stack Tecnológico

- **Core API**: NestJS, TypeScript, TypeORM, Swagger
- **Gateway**: Hono
- **Runtime**: Bun
- **Base de Datos**: PostgreSQL
- **Infraestructura**: Docker, Docker Compose

## Inicio Rápido

1. **Prerrequisitos**: Tener instalado [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/).
2. **Despliegue**:

   ```bash
   docker-compose up --build
   ```

3. **Acceso**:
   - **Documentación Interactiva (Swagger)**: `http://localhost:3080/api/docs`
   - **Gateway (Health Check)**: `http://localhost:4080/health`
   - **Rutas Proxiadas**: `http://localhost:4080/api/*`

## Características Principales

- **Arquitectura Limpia**: Separación total de capas para facilitar el mantenimiento y escalado.
- **Seguridad**: Implementación de Helmet, CORS, Rate Limiting y validación estricta de datos.
- **Sincronización**: Base de datos sincronizada automáticamente para desarrollo.

---
