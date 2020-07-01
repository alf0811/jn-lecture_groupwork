var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PaperSchema = new Schema({
  name: {
    type: String,
    required: "Enter the title of the paper"
  },
  url: {
    type: String,
    default: ""
  },
  outline: {
    type: String,
    default: ""
  },
  student_name:{
    type: String,
    required: "Enter the student name"
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Papers", PaperSchema);
