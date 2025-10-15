# System Architecture & Data Flow

This document provides an overview of how the system operates end-to-end.

## 📊 Data Flow
1. User initiates a game top-up request.
2. Backend validates wallet and initiates payment.
3. Celery worker processes game API call asynchronously.
4. Redis caches user order progress for live tracking.
5. Django updates order status and sends event to frontend.

---

## 🏗 Deployment Overview
- Nginx reverse proxy with SSL
- Gunicorn serving Django
- Docker Compose manages containers for frontend, backend, Redis, and Celery
- PostgreSQL hosted separately for data consistency
