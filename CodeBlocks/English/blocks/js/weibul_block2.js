Blockly.Blocks['weibul'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("weibul")
        .appendField("shape ")
        .appendField(new Blockly.FieldNumber(0, 0), "shape")
        .appendField("scale")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "scale");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("get note from weibul distributiom which is made of arguments");
 this.setHelpUrl("");
  }
};