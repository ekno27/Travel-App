$(document).ready(function() {
    function placeQuestion(){
        
        $("h1").text("Hello, "+ name+ "!");
        $("label").text("What places have you traveled to?")
        $("#input-form").val("");
        $("#input-form").attr("placeholder", "Example: Paris, London, New York");
    }
    
    function processCities(){
        citiesArray = cities.split(", ");
        // console.log(citiesArray);
        $("#data-retrieval").hide();
        if(citiesArray.length<4){
            $("label").text("I think you need to travel more, "+ name+ "!");

        }
        else{

            $("label").text("You've been to a lot of places, "+ name+ "!");

        }
        $("#city-prompt").text("Click on a button to find more info.")
        
        //creates buttons with the name of each city
        for (var i=0;i<citiesArray.length;i++){
            var button = $("<button>");
            button.addClass("btn");
            $(button).attr("id", "city-btn");
            $(button).text(citiesArray[i]);
            $("#city-buttons").append(button);
        }
    }

    function printInfo(city){
        var letterCount = city.length;
        
        var firstLetter = city.charAt(0);
        var lastLetter = city.charAt(city.length-1);
        var firstThree = "";
        var lastThree = "";
        var backwards = "";
        //obtaining each variable
        for (var i = 0; i<city.length;i++){

            if(i<3){
                firstThree +=city.charAt(i);
            }
            if(i>city.length-4){
                lastThree +=city.charAt(i);
            }
            backwards = city.charAt(i) + backwards;
            
        }
        $("#city-details").text(city+ " Has "+ letterCount +" letters in it. The first letter is "+ firstLetter+ ". The last letter is "+ lastLetter + ". The first three letters are "+ firstThree+ ". The last three letters are "+ lastThree + ". Spelled backwards, it's "+ backwards+".");
         
    }
    
    
    

    var name;
    var nameCheck = false;
    var cities;

    //if client clicks submit or enter key, name will be saved
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            if($("#input-form").val().trim()!==""){
                event.preventDefault();
            if(nameCheck===false){
                name = $("#input-form").val().trim();
                // console.log(name);
                placeQuestion();
                nameCheck = true;
            }
            else{
                cities = $("#input-form").val().trim();
                // console.log(cities);
                processCities(); 
            }

            }
            else{
                alert("Enter a value!")
            }
            
        }    
        
    });//end of enter event listener


    $(".jumbotron").on("click", "#submit",function(){
        if( $("#input-form").val().trim()!==""){
            event.preventDefault();
            if(nameCheck===false){
                name = $("#input-form").val().trim();
                // console.log(name);
                placeQuestion();
                nameCheck = true;
            }
            else{
                cities = $("#input-form").val().trim();
                // console.log(cities);
                processCities();

            }
           
            }
        else{
            alert("Enter a value!")
    
             }
    });//end of submit  button event 

    $("#city-buttons").on("click","#city-btn",function(){
        // $(this).text();
        var city = $(this).text().trim();
        // console.log(city);
        $("#current-city").text(city);
        printInfo(city);
    });
    


}); //end of app.js
