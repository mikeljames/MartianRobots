var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var experiment = lab.experiment;
var expect = Code.expect;

var East = require('../data/east');
var North = require('../data/north');
var South = require('../data/south');
var Map = require('../data/map');

suite('East',function(){
	
	var east;
	
	lab.beforeEach(function(done){
		var map = Map.setSize(5,3);
		east = new East(North, South, map);

		done();
	});

	test('Returned string is east',function(done){		
		expect(east.toString()).to.equal('East');
		done();
	});

	test('Return North when turning left', function(done){
		expect(east.turnLeft().toString()).to.equal('North');
		done();
	});

	test('Return South when turning right', function(done){
		expect(east.turnRight().toString()).to.equal('South');
		done();
	});

	test('Location is x:1, y:2', function(done){
		var endPosition = east.moveForward(1,1);
		expect(endPosition.x).to.equal(1);
		expect(endPosition.y).to.equal(2);
		done();
	});

});
