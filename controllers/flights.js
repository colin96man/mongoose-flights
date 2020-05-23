const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'Flights List', flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}