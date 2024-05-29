Blockly.Blocks['play1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play");
    this.appendValueInput("Note No.")
        .setCheck("Number")
        .appendField("ノートナンバー (自然数)");
    this.appendValueInput("during")
        .setCheck("Number")
        .appendField("音の長さ (小数)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("ノートナンバーの音をduringの間流す");
 this.setHelpUrl("");
  }
};