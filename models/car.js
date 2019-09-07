let mongoose = require('mongoose');
let carSchema = mongoose.Schema({
    maker:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserCol'
    }
    
});

let carModel = mongoose.model('CarCol', carSchema);
module.exports = carModel;