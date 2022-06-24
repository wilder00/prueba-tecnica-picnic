const { Router } = require('express');
const { check } = require('express-validator');

const { 
  getUser,
  postUser,
} = require('../controllers/users.controller');

const {  existEmail } = require('../helpers/db-validators');

const {
  validateFields,
} = require('../middlewares');

const router = Router();
  
router.get('/',[
  check('email', 'el correo no es válido').isEmail(), 
  validateFields,
],getUser);

router.post('/',[
  check('email', 'el correo no es válido').isEmail(), 
  check('email').custom( existEmail ), 
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  validateFields,
], postUser);




module.exports = router;