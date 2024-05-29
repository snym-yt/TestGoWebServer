Blockly.JavaScript['custom_test'] = function (block) {
    var number_num = block.getFieldValue('num');
    var code = number_num;
    return [code, Blockly.JavaScript.ORDER_NONE];
};