import { connectionStr } from "@/app/utilis/db";
import { Post } from "@/app/utilis/model/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    
    const page = 1;
    const POST_PER_PAGE = 6;
      //console.log(POST_PER_PAGE);
    const skip = POST_PER_PAGE * (page - 1);
  
    try {
      await mongoose.connect(connectionStr);
  
      const result = await Post.find().skip(skip).limit(POST_PER_PAGE).exec();
      //console.log(posts);
  
      return new NextResponse(
        JSON.stringify({ result, success: true }),
        { status: 200 }
      );
    } catch (err) {
      console.error(err);
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong!' }),
        { status: 500 }
      );
    }
  };

export async function POST(req){
    const payload = await req.json();
    await mongoose.connect(connectionStr);
    let post = new Post(payload);
    const result = await post.save();
    return NextResponse.json({result, success: true});
}
