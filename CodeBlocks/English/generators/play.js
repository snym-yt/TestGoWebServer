Blockly.JavaScript['play1'] = function(block, generator) {
  var value_note_no_ = Blockly.JavaScript.valueToCode(block, 'Note No.', Blockly.JavaScript.ORDER_ATOMIC);
  var value_during = Blockly.JavaScript.valueToCode(block, 'during', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'play(' + value_note_no_ + ', ' + value_during + ');\n';
  return code;
};