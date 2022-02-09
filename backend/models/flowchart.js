const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const flowchartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (validator.isEmpty(value)) {
                throw new Error('Name cannot be empty')
            }
        }
    },
    best: {
        type: Number,
        default: 0
    },
    order: {
        type: Array,
        default: []
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },


}, {
    timestamps: true
})
const Flowchart = mongoose.model('Flowchart', flowchartSchema)