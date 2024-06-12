const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    sur_name: String,
    birth_date: String,
    gender: String,
    birth_adresse: String,
    full_father_name: String,
    fathers_proffession: String,
    full_mother_name: String,
    mothers_proffession: String,
    civilian_affairs_agent: String
})

const madhmounSchema = new mongoose.Schema ({
    name: String,
    sur_name: String,
    birth_date: String,
    gender: String,
    birth_adresse: String,
    full_father_name: String,
    fathers_proffession: String,
    full_mother_name: String,
    mothers_proffession: String,
    civilian_affairs_agent: String
})

module.exports = {userSchema, madhmounSchema}