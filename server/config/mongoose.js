const mongoose = require('mongoose')

const UserSchema = require('../models/user')
mongoose.model('User', UserSchema)
//Other schemas follow this pattern