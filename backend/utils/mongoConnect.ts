const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sivan:Oriki12304!@project4.2mo5cer.mongodb.net/test', {userNewUrlParser:true, useUnifiedTopology: true } );

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', ()=> {
    //we're connected!
    console.log("mongo connected");
});

export default db;

