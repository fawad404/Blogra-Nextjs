import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import Admin from "@/app/utilis/model/admin";
import { connectToDB } from "@/app/utilis/mongodb";


export async function GET(req) {
    try {
        // Parse the URL to get the email and password from query parameters
        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");
        const password = searchParams.get("password");

        // Ensure both email and password are provided
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required.", success: false });
        }

        await connectToDB();
        
        // Find the admin by email
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return NextResponse.json({ error: "Admin not found.", success: false });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid password.", success: false });
        }

        // Return success response if login is successful
        return NextResponse.json({ admin, success: true });
    } catch (err) {
        return NextResponse.json({ error: err.message, success: false });
    }
}


export async function POST(req){
    try {
        const payload = await req.json();
        
        // Generate salt synchronously
        const salt = await bcrypt.genSalt(10);
        
        // Hash password synchronously
        const hashedPass = await bcrypt.hash(payload.password, salt);
        
        //console.log(payload.email, hashedPass);
        await connectToDB();

        const newAdmin = new Admin({
            email: payload.email,
            password: hashedPass
        })
        const admin = await newAdmin.save();
        
        return NextResponse.json({ admin, success: true });
    } catch(err) {
        return NextResponse.json({ error: err.message, success: false });
    }
}

    