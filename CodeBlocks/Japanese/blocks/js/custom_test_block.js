Blockly.Blocks['custom_test'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("テストの値は")
        .appendField(new Blockly.FieldNumber(0), "num")
        .appendField("です");
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};