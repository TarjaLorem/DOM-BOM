$(document).ready(function(){

    $("#preventDefault").click(function(event){
        event.preventDefault();
    });
    
    $(".prop").click(function(event){
        event.stopPropagation();
        alert("This is stopPropagation");
    });
    $(".events-title").click(function(event){
        alert("This is div element");
    });
    $(".default").click(function(){
        alert("this is p element");
    });
});