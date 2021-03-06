var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var Robot = require('../robot');
var Map = require('../data/map');
var West = require('../data/west');


suite('Robot Move West', function() {

	test('Move forward - new location 2,1 W', function(done) {
		Map.setSize(50, 50);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition:{
				x: 3,
				y: 1
			}
		});

		var newPosition = robot.moveForward();

		expect(newPosition.x).to.equal(2);
		expect(newPosition.y).to.equal(1);
		expect(newPosition.facing).to.equal('W');
		done();
	});

	test('Move forward 2 steps - new location 3,1 W', function(done) {
		Map.setSize(50, 50);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition: {
				x: 5,
				y: 1
			}
		});

		robot.moveForward();
		var newPosition = robot.moveForward();

		expect(newPosition.x).to.equal(3);
		expect(newPosition.y).to.equal(1);
		expect(newPosition.facing).to.equal('W');
		done();
	});

	test('Move forward 12 steps - new location 1,1 W', function(done) {
		Map.setSize(50, 50);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition: {
				x: 13,
				y: 1
			}
		});

		var i;

		for (i = 0; i < 12; i++) {
			robot.moveForward();
		}

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('W');
		done();
	});


	test('Move backward - new location 2,1 W', function(done) {
		Map.setSize(50, 50);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition: {
				x:1,
				y:1
			}
		});

		var newPosition = robot.moveBackward();

		expect(newPosition.x).to.equal(2);
		expect(newPosition.y).to.equal(1);
		expect(newPosition.facing).to.equal('W');
		done();
	});


	test('Move backward 12 steps - new location 1, 1 W', function(done) {
		Map.setSize(50, 50);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition:{
				x:1,
				y:1
			}
		});

		var i;

		for (i = 0; i < 12; i++) {
			robot.moveBackward();
		}

		expect(robot.currentPosition.x).to.equal(13);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('W');
		done();
	});


});