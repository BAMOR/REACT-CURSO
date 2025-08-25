// Importamos la función findInvoiceById desde otro archivo
import { findInvoiceById } from './data/invoices.js';

// ⭐ USO DE LA PROMESA:
// findInvoiceById(3) retorna una PROMESA
findInvoiceById(3)
    .then(console.log)    // ✅ Se ejecuta si la promesa se RESUELVE (resolve)
    .catch(console.error); // ❌ Se ejecuta si la promesa es RECHAZADA (reject)