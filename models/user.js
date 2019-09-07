let mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {type: Number,
          validate:{
              validator:(value)=>value%2===0, // function 
              message:'Age should be a even number'
          },
          //min: 17,
          //max: 80,
          required:true
    },
    address:{
        type: String,
        set:value=>{return 'You live in '+ value;}
    },
    create: {
        type: Date,
        default: Date.now()
    }
});

userSchema.pre('save',function(){
    this.address = this.address +'CITY';
    this.age = this.age - 2;
})

let userModel = mongoose.model('UserCol', userSchema);
// name of collection(table), schema
module.exports = userModel;


