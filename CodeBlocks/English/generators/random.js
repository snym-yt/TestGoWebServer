Blockly.JavaScript['random'] = function(block, generator) {
  var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble javascript into code variable.
  var code = 'Math.floor( Math.random() * (' + value_max + ' - ' + value_min + ' + 1 )) + ' +  value_min + "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};