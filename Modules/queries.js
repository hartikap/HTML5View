var db = require('./database');


//This function gets all documents from person-collection
exports.getAllPersons = function(req,res){
    
    db.Person.find(function(err,data){
        if(err) {
            
            console.log(err.message);
            res.send("Error in database");
        }
        else {
            
            res.send(data);
        }
    });
    
}


// This functions saves new person information to our person-collection
exports.saveNewPerson = function(req,res){
    
    // create new person-object with atrributes from req.body
    var personTemp = new db.Person(req.body); 
    // save personTemp-object to the collection
    personTemp.save(function(err,ok){
        
        res.send("database action done");
    });
    
}

exports.deletePerson = function(req,res){
    
    // req.params.if returns 'id=34124j124j124'. Following
    // code returns just the '34124j124j124'
    var id = req.params.id.split("=")[1];
    
    db.Person.remove({_id:id},function(err){
        
        if(err){
            res.send(err.message);
        }
        else{
            res.send("Delete ok");
        }
    });
    
};