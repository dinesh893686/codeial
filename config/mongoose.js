const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log( "we're connected to the db!") 
})
module.exports=db

