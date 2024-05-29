Blockly.Blocks['play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play")
        .appendField("ノートナンバー (自然数)")
        .appendField(new Blockly.FieldNumber(60, 0, Infinity, 1), "Note No.")
        .appendField("音の長さ (小数)")
        .appendField(new Blockly.FieldNumber(0.1, 0), "during");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("ノートナンバーの音を指定した秒数だけ流す");
 this.setHelpUrl("");
  }
};