Blockly.JavaScript['play'] = function(block, generator) {
  var number_note_no_ = block.getFieldValue('Note No.');
  var number_during = block.getFieldValue('during');
  // TODO: Assemble javascript into code variable.
  var code = 'play(' + number_note_no_ + ', ' + number_during + ');\n';
  return code;
};