$(document).ready(function (){ 

// Dropdown menu icon animation up/down toggle.

$('.dropbtn').on('click', function() {
    $('#myDropdown').slideToggle();
    $(this).find('i').toggleClass('fa-sort-up fa-sort-down')
});

$(".soups, .desserts, .teas").hide();

// Hover animation ITT FOLYTASD

$("#maindish, #soups, #desserts, #teas").hover(function() {
    $(this).fadeTo("slow", 1);
}, function() {
    $(this).fadeTo("slow", 0.5);
});



//Main dish

$("#maindish").click(function() {
    var visibility = $("#maindish").is(":visible");
    if (visibility) {
        console.log("not visible");
    } else {
        console.log("visible");
    }
    //$(".soup, .desserts, .teas").hide();
    $(".maindish").slideToggle("fast");
    $("#maindish").toggleClass("visible");

    $(".soups, .desserts, .teas").slideUp();
    $("#soups, #desserts, #teas").removeClass("visible");

});

//soup

$("#soups").click(function() {
    var visibility = $("#soups").is(":visible");
    if (visibility) {
        console.log("not visible");
    } else {
        console.log("visible");
    }
    $(".maindish, .desserts, .teas").slideUp();
    $(".soups").slideToggle("fast");
    $("#soups").toggleClass("visible");
    $("#maindish, #desserts, #teas").removeClass("visible");
});

//teas

$("#teas").click(function() {
    var visibility = $("#teas").is(":visible");
    if (visibility) {
        console.log("not visible");
    } else {
        console.log("visible");
    }
    $(".maindish, .desserts, .soups").slideUp();
    $(".teas").slideToggle("fast");
    $("#teas").toggleClass("visible");
    $("#maindish, #desserts, #soups").removeClass("visible");
});

//desszerts

$("#desserts").click(function() {
    var visibility = $("#desserts").is(":visible");
    if (visibility) {
        console.log("not visible");
    } else {
        console.log("visible");
    }
    $(".maindish, .teas, .soups").slideUp();
    $(".desserts").slideToggle("fast");
    $("#desserts").toggleClass("visible");
    $("#maindish, #teas, #soups").removeClass("visible");
});

$(document).ready(function() {
    $(".ingredients i").click(function() {
        var calories = $(this).parent().data("calories");
        var carbs = $(this).parent().data("carbs");
        var fat = $(this).parent().data("fat");
        var proteins = $(this).parent().data("proteins");
        var totalNum = $("#total");
        var totalCarbs = $("#totalCarbs");
        var totalFats = $("#totalFats");
        var totalProteins = $("#totalProteins");
        var currentCalories = +totalNum.html();
        var currentCarbs = +totalCarbs.html();
        var currentFats = +totalFats.html();
        var currentProteins = +totalProteins.html();
        var pressed = $(this).hasClass("clicked");
        if (isNaN(currentCalories)) {
            currentCalories = 0;
        }
        if (pressed) {
            $(this).removeClass("clicked");
            $(this).addClass("fa-plus");
            totalNum.text(+(currentCalories - calories).toFixed(1));
            totalCarbs.text(+(currentCarbs - carbs).toFixed(1));
            totalFats.text(+(currentFats - fat).toFixed(1));
            totalProteins.text(+(currentProteins - proteins).toFixed(1));
        } else {
            $(this).addClass("clicked");
            totalNum.text(+(currentCalories + calories).toFixed(1));
            totalCarbs.text(+(currentCarbs + carbs).toFixed(1));
            totalFats.text(+(currentFats + fat).toFixed(1));
            totalProteins.text(+(currentProteins + proteins).toFixed(1));
        }
    });
});

// plus button hover effect

// $("td i").hover(
//     function() {
//         $(this).removeClass('fa-plus');
//         $(this).addClass('fa-plus-circle');
//     },

//     function() {
//         $(this).removeClass('fa-plus-circle');
//         $(this).addClass('fa-plus');

//         if ($(this).hasClass("fa-times-circle")) {
//             $(this).removeClass('fa-plus');
//         }

 
      
//     });


// plus button click effect

$("td i").click(function() {
    $(this).removeClass('fa-plus');
    $(this).removeClass('fa-plus-circle');
    $(this).toggleClass("fa-times-circle");

  

});

$(".fa-times-circle").click(function() {

  $(this).removeClass('fa-plus-circle');
  $(this).addClass('fa-plus'); 
});





//  Filters + Description text setup

//  Filters + Description text setup

$(document).on('click', '.diet-filter-button', function () {
     var map = {
        vegan: {
            attr: 'vegan',
            desc: 'veganDescription'
        },
        vegeterian: {
            attr: 'vegetarian',
            desc: 'vegetarianDescription'
        },
        gluten: {
            attr: 'glutenfree',
            desc: 'glutenFreeDescription'
        },
        lactose: {
            attr: 'lactoseFree',
            desc: 'lactoseFreeDescription'
        },
        addedSugar: {
            attr: 'noAddedSugar',
            desc: 'noAddedSugarDescription'
        }
    },
    diet = $(this).data('diet'),
    filtered = $(this).hasClass("filtered");

    if (filtered) {
        $(this).removeClass("filtered");
        $(".ingredient:not([" + map[diet]['attr'] + "])").fadeTo(1000, 1).css("pointer-events", "auto");
        $("#" + map[diet]['desc']).css("opacity", "0");
    } else {
        $(this).addClass("filtered");
        $(".ingredient:not([" + map[diet]['attr'] + "]").fadeTo(1000, 0.5).css("pointer-events", "none");
        $("#" + map[diet]['desc']).css("opacity", "1");
    }
});

});