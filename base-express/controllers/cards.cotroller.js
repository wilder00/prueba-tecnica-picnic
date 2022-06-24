//para que el editor de código autocomplete mejor
const { request, response } = require('express');
const Card = require('../models/card.model');


const getCards = async (req = request, res = response)=>{

  try {

    const cards = await Card.findAll({ limit: 6, })


    res.json({
      cards
    });
  } catch (error) {
    res.status(500).json({
      message: "No se pudo obtener el cards"
    })
  }
}


module.exports = {
  getCards,
}