function Star () {

	this.resetV = function() {
		this.x = random(-width /2, width/2);
		this.y = random(-height/2, height/2);
		this.z = random(0, width );
		
	}
	this.show = function() {
		noStroke();
		
		var sx = map(this.x/this.z , 0, 1, 0, width);
		var sy = map(this.y/this.z, 0, 1, 0, height);
		var sr = map(this.z, 0, width, 16, 0);
		var sa = map(this.z, 0, width, 255, 0);

		fill(sa);
		ellipse(sx, sy, sr,sr);
	}

	this.update = function ( ){
		this.z = this.z - speed;
		if (this.z <1){
			this.resetV();
		}
	}
	
}