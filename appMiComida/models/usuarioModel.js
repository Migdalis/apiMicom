var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usuarioSchema = new Schema({
	'nickname': { type: String, required: true, unique: true},
	'password': { type: String, required: true},
	'nombre': String,
	'apellido': String,
	'telefono': { type: Number},
	'email': { type: String, required: true, unique: true},
	'fecha_nacimiento': Date,
	'sexo': { Type: String, enum: ['Masculino','Femenino']},
	'suscriptores': [{ type: Schema.Types.ObjectId, ref: 'User', required: false}],
	'suscripcion_categorias': [{ Type: String, enum: ['Desayunos','Almuerzos','Cenas','Sopas'], required: false}]
});

module.exports = mongoose.model('usuario', usuarioSchema);
