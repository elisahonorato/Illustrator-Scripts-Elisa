// Mark the anchors that are not orthogonal

// JavaScript Script for Adobe Illustrator CS3
// Tested with Adobe Illustrator CS3
// Description: Mark the anchors that are not orthogonal

// Copyright(c) 2023 Elisa Honorato
// Coordinated by Pancho Galvez

var doc = app.activeDocument; // Seleccionamos el documento
var numSegments = 0; // Inicializamos el contador de segmentos

var all_selectedPaths = doc.selection; // Identificamos el segmento seleccionado
for (var i = 0; i < all_selectedPaths.length; i++) { // Recorremos los segmentos
  var selectedPath = all_selectedPaths[i]; // Identificamos el segmento[i] del array
  var numAnchorPoints = selectedPath.pathPoints.length; // Contamos el número de puntos de anclaje del segmento seleccionado
  var no_handlers = 0;

  for (var j = 0; j < numAnchorPoints; j++) {
    var point_selected = selectedPath.pathPoints[j+1]; // identificamos el punto de anclaje del segmento seleccionado
    var point_left = selectedPath.pathPoints[j]; // identificamos el punto de anclaje izquierdo del segmento seleccionado
    var point_right = selectedPath.pathPoints[j+2]; // identificamos el punto de anclaje derecho del segmento seleccionado
    if (anchorNoHandler(point_selected) || anchorNoHandler(point_left) || anchorNoHandler(point_right)) {
      break;
    }
    if (point_selected.anchor) {
      var angle = Math.atan2(point_selected.anchor[1] - point_selected.leftDirection[1], point_selected.anchor[0] - point_selected.leftDirection[0]);
      var degrees = angle * (180 / Math.PI);

      if (degrees !== 180 && degrees !== -90 && degrees !== 0 && degrees !== 90 && degrees !== -180) {
        var radius = 10;
        var circle = doc.pathItems.ellipse(point_selected.anchor[1] + radius/2, point_selected.anchor[0] - radius/2, radius, radius);
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
}

function anchorNoHandler(point) {
  return (
    point.anchor.toString() === point.leftDirection.toString() &&
    point.anchor.toString() === point.rightDirection.toString()
  );
}
