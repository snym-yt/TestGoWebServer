Blockly.defineBlocksWithJsonArray(
    [{
        "type": "controls_repeat_ext",
        "message0": "%{BKY_CONTROLS_REPEAT_TITLE}",
        "args0": [
          {
            "type": "input_value",
            "name": "TIMES",
            "check": "Number"
          }
        ],
        "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
        "args1": [
          {
            "type": "input_statement",
            "name": "DO"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_LOOPS_HUE}",
        "inputsInline": true,
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
      }]
  );
  
  Blockly.JavaScript['loop'] = function(block, generator) {
    // var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ATOMIC);
    // var value_max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = "";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };