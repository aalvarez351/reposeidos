// Código para Google Apps Script - Guardar suscripciones en Google Sheets

function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById('1s-3IDvVca2RC94Lq-X9rB7NEYkopD-MQ_60qCyuN0TI'); // Reemplaza con tu ID
    var sheet = ss.getSheetByName('Suscriptores');
    if (!sheet) {
      sheet = ss.insertSheet('Suscriptores');
      sheet.appendRow(['Fecha', 'Nombre', 'Email']);
    }
    
    var data = JSON.parse(e.postData.contents);
    var nombre = data.nombre || 'Sin nombre';
    var email = data.email || 'Sin email';
    var fecha = new Date();
    
    sheet.appendRow([fecha, nombre, email]);
    
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}