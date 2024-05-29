Blockly.JavaScript['randwalk'] = function(block, generator) {
  var number_num_of_note = block.getFieldValue('num_of_note');
  var number_start_noteno = block.getFieldValue('start_noteNo');
  // TODO: Assemble javascript into code variable.
  var code = 'randwalk(' + number_num_of_note + ', ' + number_start_noteno + ');\n';
  return code;
};