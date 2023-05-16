// Get the Document Information

// JavaScript Script for Adobe Illustrator CS3
// Tested with Adobe Illustrator CS3
// Description: Document Information

// Copyright(c) 2023 Elisa Honorato
// Coordinated by Pancho Gálvez

var doc = app.activeDocument; // Seleccionamos el documento
alert("Poligonos totales del documento:\n" + doc.pathItems.length) // Mostramos el número de segmentos del documento
var numSegments = 0; // Inicializamos el contador de segmentos


var all_selectedPaths = doc.selection; // Identificamos el segmento seleccionado
for (var i = 0; i < all_selectedPaths.length; i++) { // Recorremos los segmentos

  var selectedPath = all_selectedPaths[i]; // Identificamos el segmento[i] del array
  var numAnchorPoints = selectedPath.pathPoints.length; // Contamos el número de puntos de anclaje
  alert("Segmentos de la selección [" + i + "] :\n" + numAnchorPoints); // Mostramos el número de segmentos del segmento[i]

}
