function West(Map) {

	this.moveForward = function(startX, startY) {

		return Map.moveXBackward(startX, startY);

	};

	this.moveBackward = function(startX, startY) {

		return Map.moveXForward(startX, startY);

	};

	// return this;
}

West.prototype.turnLeft = function() {
	return 'S';
};

West.prototype.turnRight = function() {
	return 'N';
};

West.prototype.toString = function() {
	return 'West';
};

module.exports = West;