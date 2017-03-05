var star = [];
var count = 100;
var speed;


function setup() {
	createCanvas(400, 300);
	for (var i = count ; i >= 0; i--) {
		star[i] = new Star();
		star[i].resetV();
	};
	createElement ('p','My p5.js of a processing example from \'the coding train\' challenge 1.')
}

function draw() {
	speed = map(mouseX, 0,width, 0, 5);
	background(0, 0, 0, 10);
	translate(width/2, height/2);

	for (var i = star.length - 1; i >= 0; i--) {
		star[i].show();
		star[i].update();
	}; 
}