// config.js
const firebaseConfig = {
    apiKey: "AIzaSyAwzuQt3fpyD-_N6O9sylNOP9MtsMgbnEk",
    authDomain: "christmas-memory-tree.firebaseapp.com",
    projectId: "christmas-memory-tree",
    storageBucket: "christmas-memory-tree.firebasestorage.app",
    messagingSenderId: "445103150850",
    appId: "1:445103150850:web:0a22b7da9c6330ae2d141b",
    measurementId: "G-NZZ9K3W7NK"
  };

// App identifier for Firestore collections
const appId = "christmas-memory-tree";

// Export for use in main app
window.__firebase_config = JSON.stringify(firebaseConfig);
window.__app_id = appId;
