// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(row, col, canvas) {
// Your code goes here!
var grid = "";
for (var x = 0; x < row; x++){
  grid += "<tr>";
  for (var y = 0; y < col; y++){
    grid += `<td id="${x}${y}"></td>`; //
    if (y === col - 1){
      grid += "</tr>";
    }
  }
}
canvas.html(grid);
}

function pickColor(){
  return $('#colorPicker').val();
}

////////////////////////////////////////////////////////////

var color = pickColor();
var pixelCanvas = $('#pixelCanvas');

$('#sizePicker').on('submit', function(e){
  e.preventDefault();
  color = pickColor();
  var row = $('#inputHeight').val();
  var col = $('#inputWeight').val();
  pixelCanvas = $('#pixelCanvas');

  makeGrid(row, col, pixelCanvas);

});

$('#colorPicker').on('change', function(){
  color = pickColor();
});

pixelCanvas.on('click', 'td', function(e){
  $(e.target).css( "background-color", color );

});