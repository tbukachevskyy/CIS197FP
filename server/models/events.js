const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventAttendanceRequired: {
        type: Boolean,
        required: true
    },
    vegetarianOptions: {
        type: Boolean,
        required: true
    },
    veganOptions: {
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
    organization, attendanceReq, vegetarian, vegan) {
    let newPost = new this({
        location: location,
        title: title,
        description: description,
        organization: organization,
        date: date,
        eventAttendanceRequired: attendanceReq,
        veganOptions: vegan,
        vegetarianOptions: vegetarian
    });

    return newPost.save();
}

eventSchema.statics.getEventsByFilter = function(filter) {
    return this.find(filter).then((mongoEvents) => {
        let events = mongoEvents.map(mongoEvent => {
            return { 
                title: mongoEvent.title,
                location: mongoEvent.location,
                description: mongoEvent.description,
                organization: mongoEvent.organization,
                date: mongoEvent.date,
                eventAttendanceRequired: mongoEvent.eventAttendanceRequired ? 'Attendance of event required' : 'Attendance of event not required',
                veganOptions: mongoEvent.veganOptions ? 'vegan options available' : '',
                vegetarianOptions: mongoEvent.vegetarianOptions ? 'vegetarian options available' : ''
                };
        })
        return events;
    });
}

module.exports = mongoose.model('Events', eventSchema);