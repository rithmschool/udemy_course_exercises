var mongoose = require("mongoose");
var User = require("./user");


var messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxLength: 160
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

messageSchema.pre('remove', function(next){
  User.findById(this.userId).then(user => {
    user.messages.remove(this.id);
    user.save().then(function(e){
      next();
    });
  }).catch(function(err) {
    next(err);
  });
});

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;
