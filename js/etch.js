$(document).ready(function(){

    var d= 16;
    var ancho = d * 27;
    $('.container').css('width', ancho);
    tablero(d);

})

function limpiar(){
    $('.grid').css('background-color', "#FFF");
}

function tablero(d){

    var grid = "<div class='grid'></div>"
    for (var rows = 0; rows < d; rows++){
        for(var cols = 0; cols < d; cols++){
            $('.container').append(grid);
        }
    }

    $('.grid').hover(function(){
        $(this).css('background-color', "#000");
    },function(){ $(this).css('background-color', "#DDD");
        });

}

