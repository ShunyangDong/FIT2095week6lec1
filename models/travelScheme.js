let mongoose = require('mongoose');
let travelSchema = mongoose.Schema({
    from: {
        type: String,
        required: true,
        default: 'Sydney'
    },
    to: {
        type: String,
        required: true
    },
    airline:{
        type:String,
        required: true
    },
    cost: {type: Number,
          validate:{
              validator:(value)=>value>0, 
              message:'Cost should be positive'
          }
        
    }
});

let travelModel = mongoose.model('TravelCol', travelSchema);
module.exports = travelModel;


