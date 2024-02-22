const mongoose = require('mongoose')
const eventsSchema = new mongoose.Schema({
    title: String,
    date: String,
    time: String,
    location: String,
    description: String,
})

module.exports = mongoose.model("events", eventsSchema);