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
    //create a ticket by new Ticket(req.body)
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.create(req.body, function(err, ticket) {
            flight.tickets.push(req.body.ticketsId);
            flight.save(function(err) {
                ticket.save(function(err) {
                    res.redirect(`/flights/${flight._id}`);
                })
            })
        })
    })
    //call back function, set the flight property equal to req.params.id
    //save the ticket
    //redirect to flight show page
}