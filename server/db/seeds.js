use hotel_bookings;

db.dropDatabase();

db.bookings.insertMany([
    {
        "name": "John Milbank",
        "email": "radical@orthodoxy.com",
        "checked_in": false
    },
    {
        "name": "Owen Barvield",
        "email": "final@participation.com",
        "checked_in": false
    },
    {
        "name": "Hans-Georg Gadamer",
        "email": "truth@method.com",
        "checked_in": true
    },
    {
        "name": "Edith Stein",
        "email": "thomistm@phenomenology.com",
        "checked_in": true
    }        
])