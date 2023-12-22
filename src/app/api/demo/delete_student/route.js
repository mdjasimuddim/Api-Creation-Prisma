import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        let prisma = new PrismaClient();
        let result = await prisma.user.delete({
            where:{id:7}
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