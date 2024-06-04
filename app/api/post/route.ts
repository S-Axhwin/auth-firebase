import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation'
export async function POST(req: NextRequest) {
    const prisma = new PrismaClient();
    const body = await req.json();
    console.log(body);
    
    try{
        await prisma.post.create({
            data: {
                username: body.username,
                post: body.post
            }
        })
        return NextResponse.json({message: "posted"})    
    } catch(err) {
        console.log(err);
        
        return NextResponse.json({message: "err", err}, {status: 500})
    }
    
}

export async function GET() {
    const prisma = new PrismaClient();
    try {
        const data = await prisma.post.findMany();
        return NextResponse.json({
            post: data
        })
    } catch(e) {

    }
}