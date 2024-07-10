import mongoose from "mongoose";
import { Post } from "@/app/utilis/model/post";
import { NextResponse } from "next/server";

import { connectionStr } from "@/app/utilis/db";

export async function GET(req) {
    try {
        console.log('Request query:', req.query); // Log the entire req.query object
        
        // Extract pagination parameters from query string
        const { page = 1, limit = 3 } = req.query;

        // Check if page or limit are not numbers
        if (isNaN(parseInt(page)) || isNaN(parseInt(limit))) {
            throw new Error("Invalid pagination parameters");
        }

        // Connect to MongoDB
        await mongoose.connect(connectionStr);

        // Calculate skip and limit for MongoDB query
        const skip = (parseInt(page) - 1) * parseInt(limit);
        
        // Query MongoDB for paginated results
        const result = await Post.find().skip(skip).limit(parseInt(limit));
       
        console.log(`Page: ${page}, Limit: ${limit}, Skip: ${skip}`);
        console.log("Result:", result);

        // Return paginated results
        return NextResponse.json({ result, success: true });
    } catch (err) {
        console.error('Error fetching data:', err); // Log error
        return NextResponse.json({ success: false, error: err.message });
    }
}
