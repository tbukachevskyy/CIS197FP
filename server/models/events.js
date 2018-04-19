const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventAttendanceRequired: {
        type: Boolean,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    title: {
        type: String,
        rquired: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
});

eventSchema.statics.createEvent = function (title, description, date, location, 
    organization, attendanceReq) {
    let newPost = new this({
        location: location,
        title: title,
        description: description,
        organization: organization,
        date: date,
        eventAttendanceRequired: attendanceReq
    });

    return newPost.save();
}

module.exports = mongoose.model('Events', eventSchema);