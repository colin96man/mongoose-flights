const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: String,
    arrival: {
        type: Date,
        default: function() {
            const dt = new Date();
            return dt.setFullYear(dt.getFullYear() + 1);
        }
    }
});

const flightSchema = new Schema({
    airline: String,
    airport: {
        type: String,
        default: function() {
            return 'DEN'
        }
    },
    flightNo: {type:Number, min: 10, max: 9999},
    destinations: [destinationSchema],
    departs: {
        type: Date,
        default: function() {
            const dt = new Date();
            return dt.setFullYear(dt.getFullYear() + 1);
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);