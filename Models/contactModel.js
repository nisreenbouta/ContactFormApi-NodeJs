const db = require('mongoose');
const contactSchema= new db.Schema({
    name: {
        type: String
        
    },
    email:{
        type: String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
}, {timestamps:true})
module.exports = db.model('contact',contactSchema);