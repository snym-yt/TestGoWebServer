Blockly.defineBlocksWithJsonArray(
  [{
    "type": "random",
    "message0": "random %1 min %2 max %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "min",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "max",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "Getting a random integer between two values",
    "helpUrl": ""
  }]
);

javascript.javascriptGenerator.forBlock['random'] = function(block, generator) {
  var value_min = generator.valueToCode(block, 'min', javascript.Order.ATOMIC);
  var value_max = generator.valueToCode(block, 'max', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'Math.floor( Math.random() * (' + value_max + ' - ' + value_min + ' + 1 )) + ' +  value_min;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.javascript.ORDER_NONE];
};