# 🤖 Nova AI

A modern AI-powered chat application built using the MERN Stack.

Nova AI allows users to securely register, log in, create chat conversations, and interact through a clean and responsive chat interface. The project is designed with scalable architecture and modern development practices, making it suitable for portfolio and placement purposes.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcrypt
- Persistent Login using Local Storage

---

## 💬 Chat System

- Create New Chat
- Chat History Sidebar
- Store Messages in MongoDB
- Dynamic Chat Titles
- Responsive Chat Interface
- Protected Chat APIs

---

## 🎨 User Interface

- Modern Responsive Design
- React Context API
- Toast Notifications
- Loading States
- Clean Component Architecture

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast
- Lucide React Icons

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

# 📂 Project Structure

```
Nova-AI
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/nova-ai.git
```

```
cd nova-ai
```

---

# Backend Setup

```
cd server
```

Install Dependencies

```bash
npm install
```

Create `.env`

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm run dev
```

---

# Frontend Setup

```
cd client
```

Install Dependencies

```bash
npm install
```

Run Frontend

```bash
npm run dev
```

Application will run on

```
http://localhost:5173
```

Backend

`
https://ai-chat-application-2-vwyb.onrender.com
```

---

# 📌 API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

Body

```json
{
  "name":"John Doe",
  "email":"john@example.com",
  "password":"123456"
}
```

---

### Login

```
POST /api/auth/login
```

Body

```json
{
  "email":"john@example.com",
  "password":"123456"
}
```

---

### Current User

```
GET /api/auth/me
```

Headers

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Chat APIs

### Create Chat

```
POST /api/chat
```

---

### Get All Chats

```
GET /api/chat
```

---

### Save Message

```
POST /api/chat/message
```

Body

```json
{
  "chatId":"CHAT_ID",
  "role":"user",
  "content":"Hello Nova AI"
}
```

---

# 🔒 Authentication Flow

```
Register
      │
      ▼
Login
      │
      ▼
JWT Token Generated
      │
      ▼
Token Stored in Local Storage
      │
      ▼
Protected Routes
      │
      ▼
Authenticated APIs
```

---

# 📸 Screenshots

Add screenshots here after deployment.

- Login Page
- Register Page
- Home Dashboard
- Chat Interface

---

# 🔮 Future Enhancements

- Google Gemini API Integration
- OpenAI Integration
- Streaming AI Responses
- Image Upload Support
- Voice Chat
- Markdown Support
- Code Syntax Highlighting
- Delete Chat
- Rename Chat
- Chat Search
- Export Chat
- Dark / Light Theme
- Multiple AI Models

---

# 📚 What I Learned

- Building a complete MERN Stack application
- JWT Authentication
- REST API Development
- MongoDB Integration
- React Context API
- Protected Routes
- Axios API Integration
- State Management
- Modern React Architecture

---

# 👩‍💻 Author

**Priya Gautam**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

# ⭐ If you like this project

Give it a ⭐ on GitHub."# Practice-Full-Stack" 
