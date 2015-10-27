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
    $("#fuutteri").css("background-color","lightblue")
        .css("padding","20px").css("border-radius", "8px");
    
    $(".about").html("<b>New text</b>");
    $("[data-dummy]").append("Hello World!");
    
});