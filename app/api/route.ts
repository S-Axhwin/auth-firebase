import { NextResponse } from "next/server";

export async function GET() {
    console.log("here");
    return NextResponse.json({message: "all ok"})
}