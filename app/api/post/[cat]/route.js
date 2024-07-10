
import { connectionStr } from "@/app/utilis/db";
import { Post } from "@/app/utilis/model/post";
import { connectToDB } from "@/app/utilis/mongodb";
import mongoose from "mongoose";


import { NextResponse } from "next/server";


const deslugify = (slug) => {
  return slug.replace(/-/g, ' ');
};

export async function GET(req, content) {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(connectionStr);

    // Extract title slug from the request content
    let slug = content.params.cat;
    let title = deslugify(slug);

    // Fetch the post from the database
    const result = await Post.find({ title: title });

    // Check if the post was found
    if (!result.length) {
      return NextResponse.json({ success: false, message: "Post not found. Please check the URL and try again." });
    }

    // Return the filtered post
    return NextResponse.json({ result, success: true });
  } catch (error) {
    // Handle errors and return error response
    return NextResponse.json({ success: false, message: error.message });
  } finally {
    // Close the mongoose connection
    await mongoose.connection.close();
  }
}

export async function DELETE(req, content) {
  try {
    // Connect to the MongoDB database
    await connectToDB();

    // Extract postId from the request content
    let postId = content.params.cat;

    // Fetch the post from the database
    const result = await Post.findByIdAndDelete(postId);

    // Check if the post was found
    if (!result) {
      return NextResponse.json({ success: false, message: "Post not found" });
    }

    // Return the filtered post
    return NextResponse.json({ success: true, message: "Post deleted successfully" }, {status: 200});
  } catch (error) {
    // Handle errors and return error response
    return NextResponse.json({ success: false, message: error.message }, {status: 500});
  } 
}


export async function PUT(req, content){
  const postId = content.params.cat;
  const filter ={_id:postId}
  const payload = await req.json();
  //console.log(payload);
  await connectToDB();
  const result = await Post.findOneAndUpdate(filter, payload);

    return NextResponse.json({result, success: true });

}

