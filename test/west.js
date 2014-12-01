var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var West = require('../data/west');
var North = require('../data/north');
var South = require('../data/south');

suite('West',function(){
	
	var west;
	
	lab.beforeEach(function(done){
		west = new West(South, North);
		done();
	});

	test('Returned string is west',function(done){		
		expect(west.toString()).to.equal('West');
		done();
	});

	test('Return South when turning left', function(done){
		expect(west.turnLeft().toString()).to.equal('South');
		done();
	});

	test('Return North when turning right', function(done){
		expect(west.turnRight().toString()).to.equal('North');
		done();
	});

});