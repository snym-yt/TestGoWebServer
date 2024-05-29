Blockly.Blocks['gauss1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gauss");
  
      this.appendValueInput("number_of_note")
          .setCheck("Number")
          .appendField("number of note (Integer)");
  
      this.appendValueInput("ave_of_noteno")
          .setCheck("Number")
          .appendField("average of Note No. (Integer)");
  
      this.appendValueInput("var")
          .setCheck("Number")
          .appendField("variance (float)");
  
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Randomly obtains the specified number of sounds from a Gaussian distribution of mean and variance specified in the argument.");
   this.setHelpUrl("");
    }
  };