Blockly.Blocks['randwalk1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("randwalk");
    this.appendValueInput("num_of_note")
        .setCheck("Number")
        .appendField("num_of_note");
    this.appendValueInput("start_noteNo")
        .setCheck("Number")
        .appendField("start note No.");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Generates the number of notes specified by `num of note`, randomly varying the height of the note from the height specified by `start note No.`.");
    this.setHelpUrl("");
  }
};