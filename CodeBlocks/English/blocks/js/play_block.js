Blockly.Blocks['play1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play");
    this.appendValueInput("Note No.")
        .setCheck("Number")
        .appendField("Note number (Integer)");
    this.appendValueInput("during")
        .setCheck("Number")
        .appendField("during (float)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Play the sound of the note number during 'during'.");
 this.setHelpUrl("");
  }
};