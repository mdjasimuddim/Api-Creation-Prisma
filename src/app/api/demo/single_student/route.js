import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){
    try{
        let prisma = new PrismaClient();
        let result = await prisma.user.create({
            data:{
                first_name: 'jasim',
                last_name: 'uddim',
                age:'26',
                grade:'3.40',
                courses:'Software Engineering'
            }
        })

        return NextResponse.json({
            status:"success",
            data:result
        })
    }catch(e){
        return NextResponse.json({
            status:"fail",
            data: e
        })
    }
}