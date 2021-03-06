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
var East = require('../data/east');
var North = require('../data/north');
var South = require('../data/south');
var West = require('../data/west');


suite('Robot Turn Left', function() {

	test('Turn left and face West', function(done) {
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north
		});

		robot.turnLeft();

		expect(robot.currentPosition.facing).to.equal('W');
		expect(robot.currentPosition.direction.toString()).to.equal('West');
		done();
	});

	test('Turn left twice and face South', function(done) {
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north
		});

		robot.turnLeft();
		robot.turnLeft();

		expect(robot.currentPosition.facing).to.equal('S');
		expect(robot.currentPosition.direction.toString()).to.equal('South');
		done();
	});

	test('Turn left 360 and face North', function(done) {
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north
		});

		robot.turnLeft();
		robot.turnLeft();
		robot.turnLeft();
		robot.turnLeft();

		expect(robot.currentPosition.facing).to.equal('N');
		expect(robot.currentPosition.direction.toString()).to.equal('North');
		done();
	});
});