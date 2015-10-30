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
    $("#fuutteri").css("background-color", "lightblue")
        .css("padding","20px").css("border-radius", "8px");
    
    $(".about").html("<b>New text</b>");
    $("[data-dummy]").append("Hello World!");
    
    
    var setting = {
        
        method:"GET",
        url:"http://localhost:28017/oma/person/",
        dataType:"jsonp",
        jsonp:"jsonp"
        
    };
    
    $.ajax(setting).done(function(data){
      
        console.log(data);
        // Get all keys(attribute names) from "data" -json object
        console.log(Object.keys(data.rows[0]));

        // Create table header dynamically
        if (data.rows.length > 0)
        {
            
            var headers = Object.keys(data.rows[0]);
            
            
            var row = $("<tr></tr>");
            for(var i = 1; i<headers.length; i++) {
                  
                    $("<td>" + headers[i] + "</td>").appendTo(row);
            }
            
            //Add row to thead element
            $(row).appendTo("thead");
            
        /* Tämä on keskeneräinen dynaaminen rakenne datan lisäämiseen tableen
            var row2 = $("<tr></tr>"); 
           
            console.log(data.rows[0][headers[1]]);
            for(var j = 0; j<data.rows.length;j++) {
                
                for(var k = 1; k<headers.length; k++) {

                        html += "<td>"+ data.rows[j][headers[k]] + "                    </td>").appendTo(row2);
                }

                //Add row to tbody element
                $(row2).appendTo("#body1");
            }
        
        */
        }
        
        
        // Create table content dynamically
        for(var i=0; i<data.rows.length; i++) {
            var html =  "<tr>"+       
                        "<td>" + data.rows[i].address + "</td>"
                        +"<td>" + data.rows[i].name + "</td>"
                        +"<td>" + data.rows[i].age + "</td>"
                        +"<td>" + data.rows[i].email + "</td>"+ "</tr>";
            $(html).appendTo("#body1");
        }
        
        
    });
    
});