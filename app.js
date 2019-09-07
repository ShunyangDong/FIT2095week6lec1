const express = require('express');
let mongoose = require('mongoose');
let app =express();

let User = require('./models/user'); //user model - with collection user and schema provided 
let Car = require('./models/car');
let url = 'mongodb://localhost:27017/week6lec1';

mongoose.connect(url,function(err){
    if(err) console.log(err);
    else{
        let user1 = new User({
            name:'iris',
            age:20,
            address: 'mel'
        });
        user1.save(function(err){
            if(err) console.log(err);
            else{
                console.log('USER saved');
                let car = new Car({
                    maker: user1._id
                
                })
                car.save(function(err1){
                    if(err1) console.log(err1);
                    else console.log(car);
                })
                console.log(user1)};
        })
    }
})

app.get('/getUser',function(req,res){
    User.find().exec(function(err,data){
        res.send(data);
    })
})

app.get('/getCar',function(req,res){
    Car.find().populate('maker').exec(function(err,data){
        res.send(data);
    })
})

app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/getCar'); 