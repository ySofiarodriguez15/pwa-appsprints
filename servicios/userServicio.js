
const userModel = require('../db/userModel');

module.exports = class {

    async createUser(user){
        await userModel.create(user)
    }

    async getAllUser(){
        const todos = await userModel.find();
        return todos;
    }

}