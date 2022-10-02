const socioServicio = require('../servicios/userServicio');
const socio = new socioServicio();

const subscribeSocio = async (req, res) => {
    await socio.createUser(req.body);
    res.json({
        socio: 'Creado'
    })
    console.log(req.body);
};


const selectSocio = async (req, res) => {
    const{
        params: {	 id }

    }= req;
     const buscado = await user.getUser(id);
     res.json(buscado)
}   

const borrarSocio = async (req, res) => {
    const{
        params: {id}
    } = req;
    await user.deleteUser(id);
    res.json({
        mensaje: 'socio eliminado'
    });
}


module.exports = {
    subscribeSocio,
    selectSocio,
    borrarSocio
}