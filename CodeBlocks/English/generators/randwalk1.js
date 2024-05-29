Blockly.JavaScript['randwalk1'] = function(block, generator) {
  var number_num_of_note = Blockly.JavaScript.valueToCode(block, 'num_of_note', Blockly.JavaScript.ORDER_ATOMIC);
  var number_start_noteno = Blockly.JavaScript.valueToCode(block, 'start_noteNo', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'randwalk(' + number_num_of_note + ', ' + number_start_noteno + ');\n';
  return code;
};