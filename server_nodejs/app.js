const mongoose = require("mongoose");
const express = require("express");
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.use(cors({origin:'http://localhost:5173'}))
app.use(parser.urlencoded({extended:false}));
app.use(express.json());

const db = require('./db.js')

app.get('/api',(req,res)=>{
  db.find(({}),(err,docs)=>{
    res.json(docs)
  })
})

app.post('/api',(req,res)=>{
	var name = req.body.name;
	var email = req.body.mail;
	var pass = req.body.password;
	
	var data = {name:name,email:email,password:pass}
	
	db.create(data).then(console.log('created'))
	
})

app.listen(3000,()=>{
    console.log("Running...")
})
