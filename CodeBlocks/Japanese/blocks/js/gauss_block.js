Blockly.Blocks['gauss1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gauss");

    this.appendValueInput("number_of_note")
        .setCheck("Number")
        .appendField("音の数 (自然数)");

    this.appendValueInput("ave_of_noteno")
        .setCheck("Number")
        .appendField("ノートナンバー平均値 (自然数)");

    this.appendValueInput("var")
        .setCheck("Number")
        .appendField("分散 (小数)");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("引数で指定した平均値と分散のガウス分布から指定した個数の音をランダムに取得する");
 this.setHelpUrl("");
  }
};