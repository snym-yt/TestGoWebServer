Blockly.Blocks['gauss'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gauss")
        .appendField("音の数 (自然数)")
        .appendField(new Blockly.FieldNumber(1, 0, Infinity, 1), "num_of_note")
        .appendField("ノートナンバーの平均値 (自然数)")
        .appendField(new Blockly.FieldNumber(60, 0, Infinity, 1), "ave_of_noteNo")
        .appendField("分散 (小数)")
        .appendField(new Blockly.FieldNumber(0.8, 0), "var");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("引数で指定した平均値と分散のガウス分布から指定した個数の音をランダムに取得する");
 this.setHelpUrl("");
  }
};