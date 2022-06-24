
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

const Card = sequelize.define('Card',{
 id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
 },
 title: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 type: {
  type: DataTypes.STRING,
  allowNull: false,
 },
 picture: {
  type: DataTypes.STRING,
  allowNull: false,
 },
},
{ timestamps: false })

module.exports = Card