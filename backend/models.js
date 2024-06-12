const mongoose = require ('mongoose');
const { userSchema, madhmounSchema } = require ('./schema');


const User = mongoose.model('User', userSchema);
const Madhmoun = mongoose.model('Madhmoun', madhmounSchema);


module.exports = {User, Madhmoun};