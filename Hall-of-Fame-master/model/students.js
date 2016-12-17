/**
 * Created by tania on 29.01.16.
 */
var mongoose = require('mongoose');
var studentsSchema = new mongoose.Schema({
    name: String,
    photo: String,
    headman: Boolean,
    n: Number,
    group: {type: mongoose.Schema.ObjectId, ref: 'Group'},
    link: String,
    male: Boolean,
    badges:{
        responsible:Boolean,
        talent: Boolean,
        positive: Boolean,
        charisma: Boolean,
        more: Boolean,
        arsehole: Boolean
    }
});
mongoose.model('Student', studentsSchema);
