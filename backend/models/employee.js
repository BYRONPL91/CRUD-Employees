const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true},
    office: { type: String, require: true},
    salary: { type: Number, require: true}
});

module.exports = mongoose.model('Employee', EmployeeSchema)