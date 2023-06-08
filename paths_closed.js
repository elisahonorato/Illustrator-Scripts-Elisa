
var doc = app.activeDocument; // Seleccionamos el documento
alert("Poligonos totales del documento:\n" + doc.pathItems.length) // Mostramos el número de segmentos del documento
var numSegments = 0; // Inicializamos el contador de segmentos


var myPaths = doc.selection; // Identificamos el segmento seleccionado
for (var i = 0; i < myPaths.length; i++) { // Recorremos los segmentos

  var myPath = myPaths[i]; // Identificamos el segmento[i] del array
  var numAnchorPoints = myPath.pathPoints.length; // Contamos el número de puntos de anclaje
  alert("Segmentos de la selección [" + i + "] :\n" + numAnchorPoints); // Mostramos el número de segmentos del segmento[i]

}
alert("No tienes mas Poligonos seleccionados, elige uno y vuelve a ejecutar el script"); // Mostramos el número de segmentos del documento
function getPathItemsInSelection(n, paths){
  if(documents.length < 1) return;

  var s = activeDocument.selection;

  if (!(s instanceof Array) || s.length < 1) return;

  extractPaths(s, n, paths);
}
