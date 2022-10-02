const { Router } = require('express');
const router = Router();



const { 
    subscribeSocio,
    selectSocio,
    borrarSocio
} = require('../controllers/subscribeController')



router.get('/', subscribeSocio); 
router.get('/select/:id', selectSocio);
router.post('/borrar/:id', borrarSocio);



module.exports = router;
