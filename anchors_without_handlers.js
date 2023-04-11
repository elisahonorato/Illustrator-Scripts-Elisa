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
  var numAnchorPoints = selectedPath.pathPoints.length; // Contamos el número de puntos de anclaje
  no_handlers = 0;
  for (var j = 0; j < numAnchorPoints; j++) {
    var point = selectedPath.pathPoints[j];

    if (point.anchor && point.leftDirection.toString() == point.anchor.toString() && point.rightDirection.toString() == point.anchor.toString()) {
      no_handlers +=1;
    }
  }
  alert("Segmentos sin controladores de la selección [" + i + "] :\n" + no_handlers); // Mostramos el número de segmentos del segmento[i]
}
