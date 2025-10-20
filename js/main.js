//Scott McDowell was lead js dev
var imgCount = 1;

//Makes accordions and renders them in collapsed state
$(function() {
    $(".accordion").accordion({
        active: false,
        collapsible: true,
        animate: 800,
        heightStyle: "content",
    });
});

//Makes imgs resizable
$(function() {
    $(".resizable").resizable();
});

//Causes flowergarden img to fade in as well as hides swapper buttons on changeImg
$(document).ready(
    function() {
        $("#flowerGarden").hide().fadeIn(1500);
        $(".imgButton").hide();
    });

//Shows button controls for homepage image on hover
function showControls() {
    $(".imgButton").show();
    setTimeout(function(){
        $(".imgButton").hide();
    }, 5000);
}

//Swaps changeImg to next one in set
function nextImg() {
    if (imgCount < 3) {
        imgCount += 1;
        $("#changeImg").attr("src", "Imgs/homepage/img" + (imgCount) + ".jpg");
    }
}

//Swaps changeImg to previous one in set
function prevImg() {
    if (imgCount > 1) {
        imgCount -= 1;
        $("#changeImg").attr("src", "Imgs/homepage/img" + (imgCount) + ".jpg");
    }
}

// performs js form validation
function formVal() {
    document.getElementById('name').setCustomValidity('');
    if (document.getElementById('name').validity.valueMissing) {
        $("#infoBox").html('Name field must be entered!');
        return;
    } else if (document.getElementById('name').value.match(/\d/g)) {
        $("#infoBox").html('Name field must not have numbers!');
        document.getElementById('name').setCustomValidity('No numbers!');
        return;
    } else if (document.getElementById('name').validity.tooShort) {
        $("#infoBox").html('Name field must have at least 4 characters!');
        return;
    } else if (document.getElementById('name').validity.tooLong) {
        $("#infoBox").html('Name field must not have more than 30 characters!');
        return;
    }

    if (document.getElementById('email').validity.valueMissing) {
        $("#infoBox").html('Email field must be entered!');
        return;
    } else if (document.getElementById('email').validity.typeMismatch) {
        $("#infoBox").html('Email field must have an @ symbol followed by at least a character!');
        return;
    } else if (document.getElementById('email').validity.tooShort) {
        $("#infoBox").html('Email field must be at least 11 charcaters!');
        return;
    } else if (document.getElementById('email').validity.tooLong) {
        $("#infoBox").html('Email field must be less than 50 charcaters!');
        return;
    }

    if (document.getElementById('message').validity.valueMissing) {
        $("#infoBox").html('Message must be entered!');
        return;
    } else if (document.getElementById('message').validity.tooShort) {
        $("#infoBox").html('Message must be longer than 20 characters!');
        return;
    }
    $("#infoBox").html('Submission successful');

    //While not used, this cookie enables submission success to be checked for  
    document.cookie = "submission=success";

    //We would have ajax deal with the submitted data, but we haven't learnt that
}

//Clears info box on form reset
function clearInfoBox() {
    $("#infoBox").html('');
}