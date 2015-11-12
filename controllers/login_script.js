$(document).ready(function(){

    $("#login").click(loginHandler);
    $("#login").click(registerHandler);
    
    
    
    
});



//This function is called when login-button is pressed
function loginHandler(event) {
    
    
    var requestData = {
        
        username: $("#username").val(),
        password: $("#password").val()
        
    };
    
    //Send login request to server
    $.ajax({
        
        method: 'POST',
        url: 'http://localhost:3000/friends/login',
        data: requestData,
        datatype: 'json'
    });
    
}

//This function is called when register-button is pressed
function registerHandler(event) {
    
    var requestData = {
        
        username: $("#username").val(),
        password: $("#password").val()
        
    };
    
    //Send login request to server
    $.ajax({
        
        method: 'POST',
        url: 'localhost:3000/friends/register',
        data: requestData,
        datatype: 'json'
    }).done(registerResponseHandler);
    
}

// This function is called when register response arrives
function registerResponseHandler(data) {
    
    $("#status").text(data.status);
    
    
}