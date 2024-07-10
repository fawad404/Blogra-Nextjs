import mongoose, { Schema, model, models } from "mongoose";

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
   password: {
    type: String,
    required: [true, 'password is required!']
   },
  isAdmin: {
    type: Boolean,
    default: false // Default value set to false
}
});

const Admin = models.Admin || model("Admin", AdminSchema);
export default Admin;