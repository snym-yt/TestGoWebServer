Blockly.JavaScript['gauss'] = function(block, generator) {
  var number_num_of_note = block.getFieldValue('num_of_note');
  var number_ave_of_noteno = block.getFieldValue('ave_of_noteNo');
  var number_var = block.getFieldValue('var');
  // TODO: Assemble javascript into code variable.
  var code = 'gauss(' + number_num_of_note + ', ' + number_ave_of_noteno + ', ' + number_var + ');\n';
  return code;
};