Blockly.Blocks['loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("loop ")
        .appendField(new Blockly.FieldNumber(10, 0, Infinity, 1), "times")
        .appendField("times");
    this.appendStatementInput("times")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};