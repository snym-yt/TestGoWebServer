Blockly.Blocks['weibul1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("weibul");
    this.appendValueInput("shape")
        .setCheck("Number")
        .appendField("shape");
    this.appendValueInput("scale")
        .setCheck("Number")
        .appendField("scale");
    // this.appendValueInput("position")
    //     .setCheck("Number")
    //     .appendField("position");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("get note from weibul distributiom which is made of arguments");
 this.setHelpUrl("");
  }
};