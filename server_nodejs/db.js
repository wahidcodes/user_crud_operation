const mongoose = require("mongoose");
mongoose.set('strictQuery',false)

const schema = new mongoose.Schema({
  name : {
    type : String
  },
  email : {
    type : String
  },
  password : {
    type : String
  }
})



data = {
  email:"amwahid2004@gmail.com",
  password:'wahidmalik'
}
const db = mongoose.model('users',schema);
const url = 'mongodb+srv://wahid:wahid@cluster0.hclog.mongodb.net/users';
mongoose.connect(url)

module.exports = db;

//db.create(data).then(console.log('saved'))
