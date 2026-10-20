# Bitácora del Hangar

App web del taller: cada avión tiene un QR que abre sus manuales y su bitácora
(puestas en marcha, mantenimiento, observaciones y cargas de combustible).

- **Alumno**: entra con su cuenta de Google, sin pedir acceso. Ve los manuales y carga registros eligiendo a su profesor a cargo; quedan pendientes hasta que ese profesor los aprueba y recién ahí pasan al historial del avión.
- **Profesor**: entra con Google. La primera vez envía una solicitud y el administrador la acepta o la rechaza.
- **Administrador**: entra con Google (cuentas listadas en `config.js` y `firestore.rules`). Agrega y elimina aviones (quedan 30 días en Eliminados), carga datos y límites y aprueba profesores.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La app completa |
| `config.js` | Configuración de Firebase, mails de administrador y URL del aviso por mail |
| `firestore.rules` | Reglas de seguridad de la base de datos (se pegan en la consola de Firebase) |
| `notificar-admin.gs` | Script de Google Apps Script que manda el mail al administrador |
| `data/seed.json` | Aviones iniciales (T-143 con sus límites); el administrador los carga con un botón la primera vez |
| `herramientas/dividir-pdf.py` | Divide un PDF grande por secciones |

## Puesta en marcha

1. En Firebase: activar Authentication con Google, crear Firestore y agregar el dominio `USUARIO.github.io` en Authentication > Configuración > Dominios autorizados.
2. Completar `config.js` con el `firebaseConfig` y el mail del administrador.
3. Firestore > Reglas: pegar `firestore.rules` y publicar.
4. Aviso por mail: en script.google.com crear un proyecto, pegar `notificar-admin.gs`, Implementar > Nueva implementación > Aplicación web, ejecutar como "Yo", acceso "Cualquier usuario". Copiar la URL en `mailWebhook` de `config.js`.
5. GitHub: Settings > Pages > Deploy from a branch > `main` / root.
6. Entrar como administrador y tocar "Cargar los aviones iniciales".
7. Manuales: subirlos a Google Drive, compartirlos con quien corresponda y agregarlos en la app con "Agregar manual por enlace".

Los manuales no están en este repositorio (es público): se guardan en Google Drive y la app los enlaza. Los registros solo los leen profesores aprobados y el administrador.

Es un registro interno del taller: no reemplaza el historial oficial del avión ni el formulario DA 337.
