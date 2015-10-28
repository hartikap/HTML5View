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
        console.log(data.rows[0].name);
        for(var i=0; i<data.rows.length; i++) {
            var html =  "<tr>"+
                        "<td>" + data.rows[i].name + "</td>"
                        +"<td>" + data.rows[i].address + "</td>"
                        +"<td>" + data.rows[i].age + "</td>";
            $(html).appendTo("tbody");
        }
            
        
    });
    
});