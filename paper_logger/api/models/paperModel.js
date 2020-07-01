var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PaperSchema = new Schema({
  name: {
    type: String,
    default: "paper title"
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
    default: ""
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Papers", PaperSchema);
