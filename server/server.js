const express = require('express');
const app = express();

// to avoid problems between going between localhosts
const cors = require('cors');

app.use(cors());

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('hotel_bookings'); // from db/seeds.js -> use hotel_bookings
    const bookingsCollection = db.collection('bookings'); // from db/seeds.js db.bookings
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter); 
})
.catch(console.error);

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`)
});