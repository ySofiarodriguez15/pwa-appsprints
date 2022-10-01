
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8080,
    MONGO: process.env.MONGO,
    MONGOATLAS: process.env.MONGOATLAS
}

