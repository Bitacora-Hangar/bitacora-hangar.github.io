// Script de Google Apps Script: avisa por mail al administrador cuando un profesor pide acceso.
// Se publica como "Aplicación web" (ejecutar como: yo; acceso: cualquier usuario)
// y su URL se pega en config.js como mailWebhook.
const ADMIN_EMAIL = 'ADMIN_EMAIL';

function doPost(e) {
  const d = JSON.parse(e.postData.contents || '{}');
  const nombre = String(d.nombre || '').slice(0, 120);
  const email = String(d.email || '').slice(0, 200);
  if (!email) return ContentService.createTextOutput('falta email');
  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: 'Bitácora del Hangar: ' + nombre + ' pide acceso como profesor',
    body: nombre + ' (' + email + ') pidió acceso como profesor.\n\n' +
          'Para aceptarlo o rechazarlo entrá como administrador en:\n' + String(d.app || '') + '\n'
  });
  return ContentService.createTextOutput('ok');
}
