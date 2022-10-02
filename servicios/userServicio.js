
const userModel = require('../db/userModel');

module.exports = class {

    async createUser(socio){	
        await userModel.create(socio)
    }

    async getAllUser(){
        const todos = await userModel.find();
        return todos;
    }

    async deleteUser(id){
        await userModel.findByIdAndDelete(id)
    }

}