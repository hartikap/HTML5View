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


// This function searches database by name or by begin
// letters of name
exports.findPersonsByName = function(req,res){
    
    var name = req.params.nimi.split("=")[1];
    //console.log(name);
    
    db.Person.find({name: {'$regex':'^'+ name,'$options':'i'}}, function(err,data) {
        
       if(err) {
           console.log("error");
           res.send('error');
       } else {
           console.log(data);
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
        
        res.redirect('/');
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
    
}

exports.registerFriend = function (req,res) {
    
    var friend = new db.Friends(req.body);
    friend.save(function(err){
        
        if(err){
            res.send({status:err,message});
        } else {
            res.send({status:"Ok"});
        }
    });
    
    
    
}
    