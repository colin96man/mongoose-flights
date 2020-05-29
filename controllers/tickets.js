const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {  
    console.log(req.params.id);
    res.render('tickets/new', {
        title: 'Add Ticket', 
        flightId: req.params.id
    });
}

function create(req, res) {
    console.log('create');
    //Flight.findById(req.params.id, function(err, flight) {
        Ticket.create({...req.body, flight: req.params.id}, function(err, ticket) {
            console.log(req.body)
            ticket.save(function(err) {
                res.redirect(`/flights/${req.params.id}`);
            })
        })
    //})    
}
//create a ticket by new Ticket(req.body)
//call back function, set the flight property equal to req.params.id
//save the ticket
//redirect to flight show page