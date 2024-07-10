import { connectToDB } from '@/app/utilis/mongodb';
import { Post } from '@/app/utilis/model/post';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(req, content) {
    try {
        await connectToDB(); // Ensure MongoDB is connected before operations

        // Extract postId from the request content
        const postId = content.params.id;
        console.log('Fetching post with ID:', postId);

        // Fetch the post from the database
        const result = await Post.findById(postId);

        // Check if the post was found
        if (!result) {
            throw new Error('Post not found');
        }

        // Return the filtered post
        console.log('Found post:', result);
        return NextResponse.json({ result, success: true }, { status: 200 });
    } catch (error) {
        // Handle errors and return error response
        console.error('Error fetching post:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 404 });
    }
}
