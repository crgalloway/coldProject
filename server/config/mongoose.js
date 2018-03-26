const mongoose = require('mongoose')

const UserSchema = require('../models/user')
mongoose.model('User', UserSchema)

const LabSchema = require('../models/lab')
mongoose.model('Lab', LabSchema)
//Other schemas follow this pattern