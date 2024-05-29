Blockly.JavaScript['loop'] = function(block, generator) {
  var number_times = block.getFieldValue('times');
  var statements_times = Blockly.generator.statementToCode(block, 'times');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};