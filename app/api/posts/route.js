import { connectionStr } from "@/app/utilis/db";
import { Post } from "@/app/utilis/model/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const database = await mongoose.connect(connectionStr);
        if(database){
            console.log(" connecting MOngoDb!");
        }
        const result = await Post.find();
       
        return NextResponse.json({ result, success: true });
    } catch (err) {
        console.error('Error fetching data:', err); // Log error
        return NextResponse.json({ success: false, error: err.message });
    }
}

export async function POST(req){
    const payload = await req.json();
    await mongoose.connect(connectionStr);
    let post = new Post(payload);
    const result = await post.save();
    return NextResponse.json({result, success: true});
}
