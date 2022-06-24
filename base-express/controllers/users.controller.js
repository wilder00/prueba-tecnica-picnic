//para que el editor de código autocomplete mejor
const { request, response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');


const getUser = async (req = request, res = response)=>{
  const { email } = req.query;

  try {

    const user = await User.findOne({where:{ email }})
    if(!user){
      res.status(403).json({
        message: "El usuario no existe",
      })
    }else{
      res.json(user);
    }

  } catch (error) {
    res.status(500).json({
      
    })
  }
}


const postUser = async(req, res = response)=>{
  
  const {name, email} = req.body;

  try {
    //const user = new User({ firstName, lastName })
    const user = new User({name, email})

    const savedUser = await user.save();

    res.json(savedUser);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se pudo crear el usuario",
    })
  }
}


module.exports = {
  getUser,
  postUser,
}