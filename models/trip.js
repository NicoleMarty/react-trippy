const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tripSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip
