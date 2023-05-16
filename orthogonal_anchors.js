// Mark the anchors that are not orthogonal

// JavaScript Script for Adobe Illustrator CS3
// Tested with Adobe Illustrator CS3
// Description: Count Anchors without Handlers

// Copyright(c) 2023 Elisa Honorato
// Coordinated by Pancho Gálvez

var doc = app.activeDocument; // Seleccionamos el documento
var numSegments = 0; // Inicializamos el contador de segmentos

var all_selectedPaths = doc.selection; // Identificamos el segmento seleccionado
for (var i = 0; i < all_selectedPaths.length; i++) { // Recorremos los segmentos
  var selectedPath = all_selectedPaths[i]; // Identificamos el segmento[i] del array
  var numAnchorPoints = selectedPath.pathPoints.length; // Contamos el número de puntos de anclaje
  var no_handlers = 0;

  for (var j = 0; j < numAnchorPoints; j++) {
    var point = selectedPath.pathPoints[j];
    var angle = Math.atan2(point.anchor[1] - point.leftDirection[1], point.anchor[0] - point.leftDirection[0]);
    var degrees = angle * (180 / Math.PI);

    if (degrees !== 180 && degrees !== -90 && degrees !== 0 && degrees !== 90 && degrees !== -180) {
      var radius = 10;
      var circle = doc.pathItems.ellipse(point.anchor[1] + radius/2, point.anchor[0] - radius/2, radius, radius);
      circle.filled = false;
      circle.strokeWidth = 3;
      circle.strokeWidth = 2;
      circle.strokeColor = new RGBColor(0, 255, 0); // Red color
        circle.strokeColor.red = 0;
        circle.strokeColor.green = 255;
        circle.strokeColor.blue = 0;
    }
  }
}
