import { Category, Posts } from "@/app/utilis/database";
import { NextResponse } from "next/server";


export const GET =  () => {
    try {
      const categories = Category;
      return new NextResponse(JSON.stringify(categories, { status: 200 }));
    } catch (err) {
      console.log(err); 
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };