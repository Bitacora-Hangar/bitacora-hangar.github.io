// Configuración de la app. Completar con los datos del proyecto de Firebase.
window.APP_CONFIG = {
  // Pegar acá el bloque firebaseConfig de la consola de Firebase (no es secreto).
  firebase: {
    apiKey: "AIzaSyAbGxZzV32WLOg4I-3ytwybrTL3S94fmFs",
    authDomain: "bitacora-hangar-6c3dc.firebaseapp.com",
    projectId: "bitacora-hangar-6c3dc",
    storageBucket: "bitacora-hangar-6c3dc.firebasestorage.app",
    messagingSenderId: "348693067722",
    appId: "1:348693067722:web:243e188261cc2eabfd4133"
  },
  // Cuentas de Google con rol de administrador (deben coincidir con firestore.rules).
  adminEmails: ["agustinsekul@impatrq.com"],
  // URL del script de Google que avisa por mail al administrador (ver notificar-admin.gs).
  mailWebhook: ""
};
