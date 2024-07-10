import { Subscribe } from "@/app/utilis/model/subscribe";
import { connectToDB } from "@/app/utilis/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
    const payload = await req.json();
    await connectToDB();

    // Check if the email already exists
    const existingSubscription = await Subscribe.findOne({ email: payload.email });
    if (existingSubscription) {
        return NextResponse.json({ message: "You are already subscribed", success: false });
    }

    // Create a new subscription
    let newSubscription = new Subscribe(payload);
    const result = await newSubscription.save();
    return NextResponse.json({ message: "Congratulations! You are subscribed", success: true });
}
