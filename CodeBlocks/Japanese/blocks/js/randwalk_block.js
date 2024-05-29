Blockly.Blocks['randwalk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("randwalk")
        .appendField("音の数 (自然数)")
        .appendField(new Blockly.FieldNumber(1, 0, Infinity, 1), "num_of_note")
        .appendField("最初の音の高さ (自然数)")
        .appendField(new Blockly.FieldNumber(60, 0, Infinity, 1), "start_noteNo");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("指定した最初の音の高さから，少しずつランダムに高さを変えていって指定の数だけ音を生成");
 this.setHelpUrl("");
  }
};