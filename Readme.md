# 🔒 JWT Authentication System

A premium, full-stack security implementation featuring a **Spring Boot** backend and a **React** frontend with modern **Glassmorphism** aesthetics.

---

## ✨ Overview

This project serves as a production-ready boilerplate for implementing **JSON Web Token (JWT)** authentication. It bridges a robust Spring Boot security layer with a high-fidelity React dashboard, ensuring seamless and secure user sessions.

---

## 🚀 Key Features

- **🛡️ JWT Core**: Secure token-based authentication with expiration and signature validation.
- **🎨 Modern UI**: Sleek, responsive dashboard using **Material UI (MUI)** with advanced CSS glass-filter effects.
- **🔐 Protected Routes**: Intelligent frontend routing that prevents unauthorized access to the dashboard.
- **📡 REST Architecture**: Cleanly separated API layer with Cross-Origin Resource Sharing (CORS) enabled.
- **⚡ Fast Integration**: Minimal setup required to get both backend and frontend running.

---

## 🛠️ Tech Stack

### Backend
- **Core**: Spring Boot 3.x
- **Security**: Spring Security (Custom Filter Chain)
- **Token**: JJWT (Java JWT)
- **Environment**: Java 17+, Maven

### Frontend
- **Framework**: React 18
- **Design**: Material UI (MUI) ✨
- **Icons**: Lucide & MUI Icons
- **State**: React Hooks (useState/useEffect)
- **Connectivity**: Axios

---

## 📂 Architecture

```bash
jwt-auth/
├── ☕ src/main/java/com/example/jwt_auth/
│   ├── 🎮 controller/  # AuthController (Entry points)
│   ├── 🛡️ security/    # JwtUtil & SecurityConfig
│   ├── 📦 model/       # User & Request Objects
│   └── ⚙️ service/     # Business Logic
├── ⚛️ frontend/
│   ├── 📁 src/
│   │   ├── 🧩 components/ # Dashboard & Login views
│   │   └── 🛣️ App.js      # Router configuration
│   └── 📄 package.json
└── 📄 pom.xml            # Project dependencies
```

---

## ⚙️ Quick Start

### 1️⃣ Backend Setup
```bash
# From the root directory
./mvnw spring-boot:run
```
> [!NOTE]
> The backend runs on **port 8081** by default.

### 2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm start
```
> [!TIP]
> The frontend runs on **port 3000**. Ensure the backend is started first to enable login.

---

## 🔑 Login Credentials

For testing purposes, use the following credentials (hardcoded in `AuthController.java`):

| Username | Password | Access Level |
| :--- | :--- | :--- |
| `admin` | `1234` | **Full Access** |

---

## 📋 API Documentation

### **Authentication**
`POST /auth/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "1234"
}
```

**Success Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ..."
}
```

---

## 🖼️ Screenshots

*Sample visuals of the application performance and UI:*

![Dashboard Preview](https://img.shields.io/badge/Preview-Dashboard-6366f1)
![Login Preview](https://img.shields.io/badge/Preview-Login-4f46e5)

---

## ⚖️ License
Distributed under the **MIT License**. See `LICENSE` for more information.
