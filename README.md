# Reacstagram 📸

A full-stack Instagram-inspired social media application built with **React**, **Vite**, and **Firebase**.

Reacstagram allows users to create accounts, share posts, upload images, and interact with content through a modern responsive interface.

## 🚀 Tech Stack

- **Frontend**
  - React
  - Vite
  - JavaScript
  - CSS / Responsive UI

- **Backend & Services**
  - Firebase Authentication
  - Cloud Firestore
  - Firebase Storage

- **Development Tools**
  - ESLint
  - Vite Hot Module Replacement (HMR)

## ✨ Features

- User authentication with Firebase Auth
- Create and view posts
- Upload and store images with Firebase Storage
- Real-time data powered by Firestore
- Protected user-specific content
- Responsive Instagram-inspired UI

## 🛠️ Getting Started

### Prerequisites

Make sure you have:

- Node.js installed
- npm installed
- A Firebase project configured

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/reacstagram.git
cd reacstagram
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

This project uses Vite environment variables for Firebase configuration.

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Then populate the Firebase values:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

## ▶️ Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🔥 Firebase Setup

To use your own Firebase project:

1. Create a project in the Firebase Console
2. Enable:
   - Authentication
   - Firestore Database
   - Firebase Storage

3. Add a Web App to your Firebase project
4. Copy the Firebase configuration values into `.env.local`
5. Configure Firestore and Storage security rules

## 📁 Project Structure

```
src/
├── components/       # Reusable React components
├── pages/            # Application pages/views
├── firebase/         # Firebase initialization
├── assets/           # Static assets
└── main.jsx          # Application entry point
```

## 📌 Future Improvements

- User profiles
- Likes and comments
- Following/follower system
- Direct messaging
- Notifications
- Improved image optimization
- Progressive Web App support

## 📄 License

This project is for educational and portfolio purposes.
