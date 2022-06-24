const { Router } = require('express');
const { getCards } = require('../controllers/cards.cotroller');



const router = Router();
  
router.get('/', [
] ,getCards);


module.exports = router;