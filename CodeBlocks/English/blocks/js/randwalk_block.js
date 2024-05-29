Blockly.Blocks['randwalk'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("randwalk")
        .appendField("num of note")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "num_of_note")
        .appendField("start note No.")
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "start_noteNo");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Generates the number of notes specified by `num of note`, randomly varying the height of the note from the height specified by `start note No.`.");
 this.setHelpUrl("");
  }
};