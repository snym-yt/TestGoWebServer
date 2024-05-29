Blockly.JavaScript['gauss1'] = function(block, generator) {
  var value_number_of_note = Blockly.JavaScript.valueToCode(block, 'number_of_note', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ave_of_noteno = Blockly.JavaScript.valueToCode(block, 'ave_of_noteno', Blockly.JavaScript.ORDER_ATOMIC);
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'gauss(' + value_number_of_note + ', ' + value_ave_of_noteno + ', ' + value_var + ');\n';
  return code;
};