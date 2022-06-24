const User = require('../models/user.model');



const existEmail = async (email = 'null') => {
  const dbHasEmail = await User.findOne({ where: { email } });
  if( dbHasEmail ){
    throw new Error("El correo ya existe");
  }
}



module.exports = {
  existEmail,
}