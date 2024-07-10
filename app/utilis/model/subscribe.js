import mongoose, { Schema, model, models } from "mongoose";


const SubscribeSchema = new Schema({
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});


export const Subscribe = mongoose.models.subscribe || mongoose.model("subscribe", SubscribeSchema);