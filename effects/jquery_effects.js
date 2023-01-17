$(document).ready(function(){

    $("#b_1").click(function(){
        $("#kwadrat").fadeOut(0);
        $("#trojkat").fadeOut("slow");
        $("#okrag").fadeOut(800);
    })

    $("#b_2").click(function(){
        $("#kwadrat").fadeIn(0);
        $("#trojkat").fadeIn("slow");
        $("#okrag").fadeIn(800);
    })

    $("#b_3").click(function(){
        $("#kwadrat").fadeToggle(0);
        $("#trojkat").fadeToggle("slow");
        $("#okrag").fadeToggle(800);
    })

    $("#b_4").click(function(){
        $("#kwadrat").fadeTo(0, 0.3);
        $("#trojkat").fadeTo("slow", 0.3);
        $("#okrag").fadeTo(800, 0.3);
    })

    $("#b_5").click(function(){
        $("#panel").slideUp();
    })

    $("#b_6").click(function(){
        $("#panel").slideDown();
    })

    $("#b_7").click(function(){
        $("#panel").slideToggle();
    })

    function callback(){
        window.alert("Callback function");
    }

    $("#b_8").click(function(){
        var k =  $("#kwadracik");
        k.animate({borderRadius: '50%'},700);
        k.animate({ height: '300px'},500);
        k.animate({borderRadius: '0%', opacity:'0.4'},700);
        k.animate({height:'100px', color: 'blue'},700);
        k.animate({opacity: '1'},700);
        k.css("color", "blue", 700);
        k.animate({width: '200px', height:'200px'},700);
        k.animate({width: '100px', height:'100px'},700);
        
        k
        .css("backgroundColor", "black", 700)
        .slideDown(700)
        .slideUp(700)
        .show(700);

        callback();
    })
    
    $("#b_9").click(function(){
        var k =  $("#kwadracik");
        k.stop(true);
    })
    
});