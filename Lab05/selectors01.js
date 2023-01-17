$(document).ready(function(){
    //zadanie 6.4.1
    $("#button_01").click(function(){
        $("p").hide();
    });

    // zadanie 6.5.1
    $("#button_02").click(function(){
        $("#p_03").hide();
    });

    //zadanie 6.6.1
    $("#button_03").click(function(){
        $(".cp_01").hide();
    })
    
    //zadanie 6.7.1
    //zadanie 6.8.2
    //1
    $("#button_04").click(function(){
        $("ul li:first").hide(500);
    })
    //2
    $("#button_05").click(function(){
        $("ul li:first-child").slideToggle();
    })
    //3
    $("#button_06").click(function(){
        $("li:even").hide();
    })
    //4
    $("#button_07").click(function(){
        $("li:odd").hide();
    })
    // 6.8.2
    $("#button_08").click(function (){
        $("p").show();
    })

    $("#button_09").click(function(){
        $(".c_04").toggle();
    })
});