import User from "@/app/utilis/model/user";
import { connectToDB } from "@/app/utilis/mongodb";
import { NextResponse } from "next/server";


export const GET =  async(req) => {
    const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

    try {
      await connectToDB();
      const data = await User.find({ email: email });
      
      return  new NextResponse(JSON.stringify(data, { status: 200 }));
    } catch (err) {
      console.log(err); 
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };