import mongoose from "mongoose"

const postModel = new mongoose.Schema({
    title: String,
    desc: String,
    img: String,
    metaTitle: String,
    metaDesc: String,
    category: String,
    slug: String,
});

export const Post = mongoose.models.posts || mongoose.model("posts", postModel);