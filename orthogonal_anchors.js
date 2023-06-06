// Mark the anchors that are not orthogonal

// JavaScript Script for Adobe Illustrator CS3
// Tested with Adobe Illustrator CS3
// Description: Mark the anchors that are not orthogonal

// Copyright(c) 2023 Elisa Honorato
// Coordinated by Pancho Galvez

var doc = app.activeDocument;
var numSegments = 0;

var all_selectedPaths = doc.selection;
for (var i = 0; i < all_selectedPaths.length; i++) {
  var selectedPath = all_selectedPaths[i];
  var numAnchorPoints = selectedPath.pathPoints.length;

  for (var j = 0; j < numAnchorPoints; j++) {
    var point_selected = selectedPath.pathPoints[j];
    var point_left = selectedPath.pathPoints[j === 0 ? numAnchorPoints - 1 : j - 1];
    var point_right = selectedPath.pathPoints[j === numAnchorPoints - 1 ? 0 : j + 1];

    if (j > 0 && j < numAnchorPoints - 1 && (isNumber(point_selected) || isNumber(point_left) || isNumber(point_right))) {
      continue;
    }
    if (point_selected.anchor) {
      var angle = Math.atan2(point_selected.anchor[1] - point_selected.leftDirection[1], point_selected.anchor[0] - point_selected.leftDirection[0]);
      var degrees = angle * (180 / Math.PI);

      if (degrees !== 180 && degrees !== -90 && degrees !== 0 && degrees !== 90 && degrees !== -180) {
        var radius = 10;
        var circle = doc.pathItems.ellipse(point_selected.anchor[1] + radius / 2, point_selected.anchor[0] - radius / 2, radius, radius);
        circle.filled = false;
        circle.strokeWidth = 2;
        circle.strokeColor = new RGBColor();
        circle.strokeColor.red = 0;
        circle.strokeColor.green = 255;
        circle.strokeColor.blue = 0;
      }
    }
  }
}

function isNumber(point) {
  return isNaN(Number(point.anchor[0])) || isNaN(Number(point.anchor[1]));
}
