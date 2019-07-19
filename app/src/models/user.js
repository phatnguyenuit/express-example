import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    login
  });
  return user;
};

userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;
