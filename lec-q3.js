const mongoose = require('mongoose');
const Travel = require('./models/travelScheme');

mongoose.connect('mongodb://128.0.15.66 :885566', function (err) {
    if (err) {
        console.log('Error in Mongoose connection');
        throw err;
    }

    console.log('Successfully connected');

    let travel1 = new Travel({
        from:'MEL',
        to:'JNB',
        airline:'VA',
        cost: 2500
    });

    travel1.save(function (err) {
        if (err) throw err;
        console.log('Travel successfully Added to DB');
    });
});