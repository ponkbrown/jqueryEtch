$(document).ready(function(){

    var grid = "<div class='grid'></div>"
    for (var rows = 0; rows < 5; rows++){
        for(var cols = 0; cols < 5; cols++){
            $('.container').append(grid);
        }
    }

    $('.grid').hover(function(){
        $(this).css('background-color', "#000");
    },function(){ $(this).css('background-color', "#DDD");
        });
})
