/**
 * Created by tania on 29.01.16.
 */
var mongoose = require('mongoose');
var groupsSchema = new mongoose.Schema({
    title: {type: String, min: 1, max: 100, required: true, unique: true},
    year_start: {type: Number, required: true},
    _speciality:{type: mongoose.Schema.ObjectId, ref: 'Speciality'}
});
mongoose.model('Group', groupsSchema);
