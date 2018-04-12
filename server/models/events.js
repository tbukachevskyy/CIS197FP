const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventAttendanceRequired: Boolean,
    organization: String,
    title: {
        type: String,
        rquired: true,
    },
    foodTypes: [{
        type: String,
    }],
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
    organization='Unknown', foodtypes=['none'], attendanceReq=true) {
    let newPost = new this({
        location: location,
        title: title,
        description: description,
        organization: organization,
        date: date,
        foodtypes: foodtypes,
        eventAttendanceRequired: attendanceReq
    });

    return newPost.save();
}

postSchema.statics.filterEventsByFood = function(foodTypes) {
    return this.find({foodTypes: foodTypes});
}

postSchema.statics.filterEventsByAttendence = function(bool) {
    return this.find({eventAttendenceRequired: bool});
}

postSchema.statics.getAllEvents = function() {
    return this.find({});
}

module.exports = mongoose.model('Events', eventSchema);