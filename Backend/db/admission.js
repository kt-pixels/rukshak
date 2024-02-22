const mongoose = require('mongoose')

const admissionSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    Cemail: String,
    Pname: String,
    phone: Number,
    Altphone: Number,
    Adharcard: Number,
    address: String,
    Altadrress: String,
    dob: String,
    course: String,
})

module.exports = mongoose.model("admissionForms", admissionSchema);