var mongoose = require("mongoose");

mongoose.createConnection('mongodb://localhost:27017/oma',connectionStatus);

//mongoose.connect('mongodb://localhost:27017/oma',connectionStatus);

// Connection callback for fail and ok cases
function connectionStatus(err,ok){
    if(err){
        console.log(err.message);
    }else{
        console.log("We are connected");
    }
}

var User = mongoose.model('User', {
    username:{type:String, unique:true},
    password:String,
    friends:[{type:mongoose.Schema.Types.ObjectId, ref:'Person'}]
});


var Person = mongoose.model('Person', {
    name:{type: String, unique:true},
    address:{type:String,default:"not specified"},
    age:{type: Number, min: 0, max:120, default:10},
    email:{type: String}
},'person');
    
// Using exports -object  you expose the data to other modules
exports.Person = Person;
exports.Friends = User;
