import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){
    try{
        let prisma = new PrismaClient();
        let result = await prisma.user.createMany({
            data:[
                {
                    first_name: 'smaim',
                    last_name: 'reza',
                    age:'27',
                    grade:'3.50',
                    courses:'Machine Learning'
                },
                {
                    first_name: 'Sakil',
                    last_name: 'Ahmed',
                    age:'25',
                    grade:'3.20',
                    courses:'Agricultural Economics'
                },
                {
                    first_name: 'Hasan',
                    last_name: 'ALi',
                    age:'25',
                    grade:'3.80',
                    courses:'Optics'
                },
                {
                    first_name: 'Sahin',
                    last_name: 'Reza',
                    age:'27',
                    grade:'3.50',
                    courses:'Discrete Mathematics'
                },
                {
                    first_name: 'Rahim',
                    last_name: 'Ali',
                    age:'26',
                    grade:'3.90',
                    courses:'Basic Electronics'
                }
            ]
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