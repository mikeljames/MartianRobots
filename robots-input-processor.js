var Map = require('./data/map');
var Robot = require('./robot');
var DirectionFactory = require('./factories/direction-factory');
var LostRobotService = require('./services/lost-robot-service');

function RobotInputProcessor() {
	var inputLines = [];
	var robotsToProcess = [];


	this.processInput = function(input) {
		inputLines = input.split('\n');

		setMapSize();

		var i = 0;
		for (i = 0; i < inputLines.length; i++) {
			var line = inputLines[i];
			if (line !== '' && /\s/g.test(line)) {
				var values = line.split(' ');

				robotsToProcess.push({
					x: values[0],
					y: values[1],
					directionChar: values[2],
					commands: inputLines[i + 1]
				});
			}
		}

		var output = '';
		var lostRobotService = new LostRobotService();
		robotsToProcess.forEach(function(robotToProcess) {
			var Direction = DirectionFactory.get(robotToProcess.directionChar);

			var robot = new Robot({
				map: Map,
				startDirection: new Direction(Map),
				startPosition: {
					x: parseInt(robotToProcess.x),
					y: parseInt(robotToProcess.y)
				},
				lostRobotService: lostRobotService
					//pass in robot lost service to share data
			});

			output += robot.processCommands(robotToProcess.commands) + '\n';
		});
		return output;

	};

	function setMapSize() {
		var values;
		values = inputLines[0].split(' ');
		Map.setSize(parseInt(values[0]), parseInt(values[1]));
		inputLines.splice(0, 1);
	}

}

module.exports = RobotInputProcessor;