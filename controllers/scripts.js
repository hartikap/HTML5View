"use strict";
console.log("Here we go!");

/*
window.onload = function(event) {
    console.log(event);
    para1.innerHTML = "Changed from JS";
    para1.style.backgroundColor = "red";
}*/



// Wait document ready event. (DOM is ready)
$(document).ready(function(){
    
    console.log("jquery onload triggered");

    
    var setting = {
        
        method:"GET",
        url:"http://localhost:3000/persons",
        dataType:"json"
        
    };
    
    $.ajax(setting).done(function(data){
      
        console.log(data);
        // Get all keys(attribute names) from "data" -json object
        console.log(Object.keys(data[0]));

        // Create table header dynamically
        if (data.length > 0)
        {
            
            var headers = Object.keys(data[0]);
            
            
            var row = $("<tr></tr>");
            /*for(var i = 1; i<headers.length; i++) {
                  
                    $("<td>" + headers[i] + "</td>").appendTo(row);
            }*/
            
            $("<td>" + "Name" + "</td>").appendTo(row);
            $("<td>" + "Address" + "</td>").appendTo(row);
            $("<td>" + "Age" + "</td>").appendTo(row);
           // $("<td>" + "E-mail" + "</td>").appendTo(row);
            
            //Add row to thead element
            $(row).appendTo("thead");
            
        }
        
        
        // Create table content dynamically
        for(var i=0; i<data.length; i++) {
            var html =  "<tr>"+       
                        "<td>" + data[i].name + "</td>"+
                        "<td>" + data[i].address + "</td>"
                        
                        +"<td>" + data[i].age + "</td>"
                        +"<td><input type='button' id=" + data[i]._id + " value = 'modify'/></td>"+ "</tr>";
            $(html).appendTo("#body1");
        }
        
        
        // get all elements from DOM where element has attribute
        // 'type' with value 'button'. Then add event handler for
        // click event for each of them
        $("[type=button]").click(function(clickdata) {
        
           for (var i = 0; i<data.length; i++) {
                // find the data from collection corresponding to pressed button id
                if (data[i]._id == clickdata.currentTarget.id) {
                    
                    buildModifyUI(data[i]);
                    break;
                }
                
                
            }
                
            //console.log(clickdata.currentTarget.id);
        
        });
        
    });
    
});


function buildModifyUI(person_data) {
    
    //console.log(person_data.name);
    var html = "<input type='text' value='" + person_data.name + "'/>" 
                + "<input type='text' value='" + person_data.address + "'/>"
                + "<input type='text' value='" + person_data.age + "'/>"
                + "<input type='text' value='" + person_data.email + "'/>"
                + "<input type='button' value='Update' id='update'/>"
                + "<input type='button' value='Delete' id='delete'/>";  
    
    $("body").html(html);
    
    $("#delete").click(function(){
        
        $.ajax({
            method:'DELETE',
            url:'http://localhost:3000/persons/id='+person_data._id
    
        }).done(function(data){
            
            location.reload(true);
        });
        
    });
                       
        
        
    
}


