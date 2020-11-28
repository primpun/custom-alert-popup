// function sadAlert(message){
//     alert(message);
// }

$(document).ready(function(){
    $('.happybutton').click(function(){
            $('.happyAlert').css({
                    "opacity":"1", "pointer-events":"auto"
            });
    });
    $('.yay').click(function(){
         $('.happyAlert').css({
                    "opacity":"0", "pointer-events":"none"
            });
    });

    $('.sadbutton').click(function(){
                    $('.sadAlert').css({
                            "opacity":"1", "pointer-events":"auto"
                    });
            });
            $('.okay').click(function(){
                 $('.sadAlert').css({
                            "opacity":"0", "pointer-events":"none"
                    });
            });

});

