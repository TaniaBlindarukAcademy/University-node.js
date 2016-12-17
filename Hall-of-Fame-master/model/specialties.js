/**
 * Created by tania on 6.02.16.
 */
var mongoose = require('mongoose');
var specialitySchema = new mongoose.Schema({
    title: {type: String, min: 1, max: 1000, required: true, unique: true},
    created_at: {type: Date, default: Date.now}
});
mongoose.model('Speciality', specialitySchema);
