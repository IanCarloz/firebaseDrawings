var database;
var drawing = [];
var currentPath = [ ];

function setup() {
  canvas = createCanvas(200, 200);
  canvas.mousePressed(startPath);

  var config = {
    apiKey: "AIzaSyAmyuals0m159WWRgl7YbsDStId6z7aG7g",
    authDomain: "tct-drawingdb.firebaseapp.com",
    databaseURL: "https://tct-drawingdb.firebaseio.com",
    projectId: "tct-drawingdb",
    storageBucket: "",
    messagingSenderId: "571550653960"
  };
  firebase.initializeApp(config);
  database = firebase.database();
}

function startPath() {
  currentPath = [];
  drawing.push(currentPath);

}

function draw() {
  background(0);

  if (mouseIsPressed) {
    var point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }
  stroke(255);
  strokeWeight(4);
  noFill();

  for (var i = 0; i < drawing.length; i++) {
    var path = drawing[i];
    beginShape();
    for (var j = 0; j < path.length; j++) {
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
}
