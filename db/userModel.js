
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    email: {
        type: 'string',
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);

