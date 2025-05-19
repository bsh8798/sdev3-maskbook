import prisma from "@/lib/server/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = {
    params: {
        id: string;
    };
};

export async function GET(
    req:NextRequest,
    {params}:Params
){
    const id = parseInt(params.id);

    if(!id) {
        return NextResponse.json({
            ok: false
        });
    }

    const numId = +id;

    const post = await prisma.post.findUnique({
        where:{id:numId}
    })

    if(!post) {
        return NextResponse.json({
            ok: false
        });
    }

    return NextResponse.json({
        ok: true,
        post
    })
}