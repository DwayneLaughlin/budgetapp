var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var chargeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a name for this transaction"
  },
  value: {
    type: Number,
    required: "Please enter a number"
  },

  date: {
    type: Date,
    default : Date.now
  }
});
var Transaction = mongoose.model('transaction',chargeSchema)
module.exports(Transaction)