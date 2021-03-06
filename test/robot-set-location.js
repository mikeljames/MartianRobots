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


suite('Robot Set Location', function() {

	test('Default Location is set to X:1 Y: 1 set Direction to: E', function(done) {
		Map.setSize(5, 3);
		var east = new East(Map);

		var robot = new Robot({
			map: Map,
			startDirection: east
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('E');
		done();
	});

	test('Default Location is set to X:50 Y: 50 set Direction to: N', function(done) {
		Map.setSize(50, 50);
		var north = new North(Map);

		var robot = new Robot({
			map: Map,
			startDirection: north
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('N');
		done();
	});

	test('Default Location is set to X:50 Y: 50 set Direction to South', function(done) {
		Map.setSize(50, 50);
		var south = new South(Map);

		var robot = new Robot({
			map: Map,
			startDirection: south
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('S');
		done();
	});

	test('Default Location is set to X:50 Y: 50 set Direction to West', function(done) {
		Map.setSize(50, 50);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west
		});

		expect(robot.currentPosition.x).to.equal(1);
		expect(robot.currentPosition.y).to.equal(1);
		expect(robot.currentPosition.facing).to.equal('W');
		done();
	});

	test('Set start Location to X:12 Y:12 and set direction to West', function(done) {
		Map.setSize(20, 20);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition: {
				x: 12,
				y: 12
			}
		});

		expect(robot.currentPosition.x).to.equal(12);
		expect(robot.currentPosition.y).to.equal(12);
		done();
	});

	test('Set start Location to X:13 Y:1 and set direction to West', function(done) {
		Map.setSize(20, 20);
		var west = new West(Map);

		var robot = new Robot({
			map: Map,
			startDirection: west,
			startPosition: {
				x: 13,
				y: 1
			}
		});

		expect(robot.currentPosition.x).to.equal(13);
		expect(robot.currentPosition.y).to.equal(1);
		done();
	});

});