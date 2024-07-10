
import { connectionStr } from "@/app/utilis/db";
import { Post } from "@/app/utilis/model/post";

import mongoose from "mongoose";
import { NextResponse } from "next/server";


export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page'), 10) || 1;
  const POST_PER_PAGE = parseInt(searchParams.get('limit'), 10);
    //console.log(POST_PER_PAGE);
  const skip = POST_PER_PAGE * (page - 1);

  try {
    await mongoose.connect(connectionStr);

    const posts = await Post.find().sort({ _id: -1 }).skip(skip).limit(POST_PER_PAGE).exec();
    //console.log(posts);

    return new NextResponse(
      JSON.stringify({ posts, success: true }),
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