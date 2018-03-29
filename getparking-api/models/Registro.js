var mongoose = require('mongoose');
var RegistroSchema = new mongoose.Schema({
  domoId: String,
  totemParent: String,
  ubicacionBrief: String,
  lat: Number,
  long: Number,
  status: Boolean,
  carId: String,
  fechaevento: { type: Date, default: Date.now },
}, { collection: 'domoStatus' });
module.exports = mongoose.model('Registro', RegistroSchema);