# 🎄 Le sapin de Noël d'Athena & Kehan

An interactive 3D Christmas tree with hand gesture controls and shared photo memories.

## ✨ Features

- **3D Particle Christmas Tree** - Beautiful tree made of thousands of particles
- **Hand Gesture Control** - Use your webcam to interact:
  - ✊ **Fist** → Gather particles into tree form
  - ✋ **Open Hand** → Scatter into galaxy mode
  - 🤏 **Pinch** → View individual photo memories
- **Shared Photo Memories** - Upload photos that sync across devices via Firebase
- **Christmas Music** - Built-in melodies (We Wish You a Merry Christmas, Santa Tell Me, Jingle Bells)

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd christmas-tree
```

### 2. Set Up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project (or use existing)
3. Enable **Authentication** → Sign-in method → Anonymous
4. Enable **Cloud Firestore** → Create database → Start in test mode
5. Go to Project Settings → Your apps → Add web app
6. Copy the config values

### 3. Configure Your Credentials

```bash
# Copy the template
cp firebase-config.template.js firebase-config.js

# Edit firebase-config.js and paste your Firebase config
```

Your `firebase-config.js` should look like:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};

const appId = "athena-kehan-tree";

window.__firebase_config = JSON.stringify(firebaseConfig);
window.__app_id = appId;
```

### 4. Run Locally

You need a local server (browsers block ES modules on `file://`):

**Option A: Python**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option B: Node.js**
```bash
npx serve
# Visit http://localhost:3000
```

**Option C: VS Code**
Install "Live Server" extension → Right-click `index.html` → "Open with Live Server"

## 📁 Project Structure

```
christmas-tree/
├── index.html                    # Main application
├── firebase-config.js            # Your Firebase config (gitignored!)
├── firebase-config.template.js   # Template for others to copy
├── .gitignore                    # Protects your secrets
└── README.md                     # This file
```

## ⚠️ Important Security Notes

- **NEVER** commit `firebase-config.js` to git
- The `.gitignore` file is set up to protect it
- If you accidentally commit it, rotate your Firebase API key immediately

## 🔥 Firestore Security Rules (Optional)

For production, update your Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artifacts/{appId}/public/data/tree_photos/{photoId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if false;
    }
  }
}
```

## 🎮 Keyboard Fallback

If hand tracking doesn't work:
- Press `1` → Tree mode
- Press `2` → Galaxy mode  
- Press `3` → View memory

## 💝 Made with Love

A Christmas gift for Kehan, from Athena 🎁