//CREAR UN NUEVO ARREGLO ALEATORIO USANDO LOS COLORES DE LA LISTA
var colors = [
    'brown',
    'darkgreen',
    'crimson',
    'darkmagenta',
    'darkgoldenrod'
];
var new_colors_array = [];
var colorRandomIndex = 0;
var new_color = "";
    //Retorna un entero aleatorio entre min (incluido) y max (excluido)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
while (colors.length > 0) {
    colorRandomIndex = getRandomInt(0, colors.length);
    new_color = colors[colorRandomIndex];
    new_colors_array.push(new_color);
    colors.splice(colorRandomIndex, 1);
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

//ASIGNAR LOS COLORES A LAS LINEAS DE COLORES DEL HTML
var colorsLines = document.getElementsByClassName("lineWithColor");
var indexOfColor = 0;
for (var i = 0; i < colorsLines.length; i++) {
    indexOfColor = i;
    while (indexOfColor > new_colors_array.length) {
        indexOfColor -= new_colors_array.length;
    }
    colorsLines[i].style.backgroundColor = new_colors_array[indexOfColor];
}