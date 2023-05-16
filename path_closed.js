// Count Anchors without Handlers

// JavaScript Script for Adobe Illustrator CS3
// Tested with Adobe Illustrator CS3
// Description: Count Anchors without Handlers

// Copyright(c) 2023 Elisa Honorato

var doc = app.activeDocument; // Seleccionamos el documento
var numSegments = 0; // Inicializamos el contador de segmentos


var all_selectedPaths = doc.selection; // Identificamos el segmento seleccionado
for (var i = 0; i < all_selectedPaths.length; i++) { // Recorremos los segmentos

  var selectedPath = all_selectedPaths[i]; // Identificamos el segmento[i] del array
  if (selectedPath.pathPoints[0].anchor[0] !== selectedPath.pathPoints[selectedPath.pathPoints.length-1].anchor[0] && selectedPath.pathPoints[0].anchor[1] !== selectedPath.pathPoints[selectedPath.pathPoints.length-1].anchor[1]) {
    var radius = 10;
    var circle = doc.pathItems.ellipse(selectedPath.pathPoints[0].anchor[1] + radius/2, selectedPath.pathPoints[0].anchor[0] - radius/2, radius, radius);
    var circle2 = doc.pathItems.ellipse(selectedPath.pathPoints[selectedPath.pathPoints.length-1].anchor[1] + radius/2, selectedPath.pathPoints[selectedPath.pathPoints.length-1].anchor[0] - radius/2, radius, radius);
    circle2.filled = false;
    circle2.strokeWidth = 3;
    circle2.strokeColor = new RGBColor(0xFF0000);
    circle2.strokeColor.red = 0;
    circle2.strokeColor.green = 0;
    circle2.strokeColor.blue = 255;
    circle2.strokeWidth = 2;
    circle.filled = false;
    circle.strokeWidth = 3;
    circle.strokeColor = new RGBColor(0xFF0000);
    circle.strokeColor.red = 0;
    circle.strokeColor.green = 0;
    circle.strokeColor.blue = 255;
    circle.strokeWidth = 2;
  }

  //alert("Segmentos sin controladores de la selección [" + i + "] :\n" + no_handlers); // Mostramos el número de segmentos del segmento[i]
}
