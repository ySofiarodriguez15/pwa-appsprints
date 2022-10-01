const mongoose = require('mongoose');
const { MONGO, MONGOATLAS } = require('../config/mongo');

exports.getConnection = async () => {
    try {
        await mongoose.connect(MONGOATLAS, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        return 'Conexión Correcta'        
    } catch (error) {
        return 'Error en mi Conexión'
    }
}
