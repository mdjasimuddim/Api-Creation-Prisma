import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        let prisma = new PrismaClient();
        let result = await prisma.user.update({
            where:{id:8},
            data:{
                first_name:"Salauddin",
                last_name:"Khan",
                age:'30',
                grade:'3.02',
                courses:'English'
            }
        })
        return NextResponse.json({
            status:"Success",
            data:result
        })
    } catch(e){
        return NextResponse.json({
            status:"Fail",
            data:e
        })
    }
}