import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false // Default value set to false
}
});

const User = models.User || model("User", UserSchema);
export default User;