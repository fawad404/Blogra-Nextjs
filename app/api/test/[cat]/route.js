import { connectionStr } from "@/app/utilis/db";
import { Post } from "@/app/utilis/model/post";
import { connectToDB } from "@/app/utilis/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, content) {
  try {
    // Connect to the MongoDB database
    
    // Extract title slug from the request content
    let slug = content.params.cat;
    
    // Fetch the post from the database
    await connectToDB();
    const result = await Post.find({ slug: slug }).sort({ _id: -1 });

    // Check if the post was found
    if (!result.length) {
      return NextResponse.json({ success: false, message: "Post not found. Please check the URL and try again." }, {status: 404});
    }

    // Return the filtered post
    return NextResponse.json({ result, success: true }, {status: 200});
  } catch (error) {
    // Handle errors and return error response
    return NextResponse.json({ success: false, message: error.message }, {status: 500});
  } finally {
    // Close the mongoose connection
    await mongoose.connection.close();
  }
}
