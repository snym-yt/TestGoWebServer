Blockly.Blocks['randwalk1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("randwalk");
    this.appendValueInput("num_of_note")
        .setCheck("Number")
        .appendField("音の数 (自然数)");
    this.appendValueInput("start_noteNo")
        .setCheck("Number")
        .appendField("最初の音の高さ (自然数)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("指定した最初の音の高さから，少しずつランダムに高さを変えていって指定の数だけ音を生成");
 this.setHelpUrl("");
  }
};