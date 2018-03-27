const mongoose = require('mongoose')

const UserSchema = require('../models/user')
mongoose.model('User', UserSchema)

const LabSchema = require('../models/lab')
mongoose.model('Lab', LabSchema)

const StorSchema = require('../models/storage')
mongoose.model('Storage', StorSchema)
//Other schemas follow this pattern