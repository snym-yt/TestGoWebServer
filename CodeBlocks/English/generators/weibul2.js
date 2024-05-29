Blockly.JavaScript['weibul'] = function(block, generator) {
  var number_shape = block.getFieldValue('shape');
  var number_scale = block.getFieldValue('scale');
  // TODO: Assemble javascript into code variable.
  var code = 'weibul(' + number_shape + ', ' + number_scale + ');\n';
  return code;
};