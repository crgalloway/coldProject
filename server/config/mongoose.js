const mongoose = require('mongoose')

const UserSchema = require('../models/user')
const beautifyunique = require('mongoose-beautiful-unique-validation');
UserSchema.plugin(beautifyunique);
mongoose.model('User', UserSchema)

const LabSchema = require('../models/lab')
mongoose.model('Lab', LabSchema)

const StorSchema = require('../models/storage')
mongoose.model('Storage', StorSchema)

const SampleSchema = require('../models/sample')
mongoose.model('Sample', SampleSchema)
//Other schemas follow this pattern