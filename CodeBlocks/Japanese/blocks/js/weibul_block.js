Blockly.Blocks['weibul1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("weibul");
    this.appendValueInput("shape")
        .setCheck("Number")
        .appendField("分布の形 (小数)");
    this.appendValueInput("scale")
        .setCheck("Number")
        .appendField("ピークの位置 (自然数)");
    // this.appendValueInput("position")
    //     .setCheck("Number")
    //     .appendField("position");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("指定した分布の形とピークの位置で出来るワイブル分布からランダムに音を生成");
 this.setHelpUrl("");
  }
};