import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma"

type RountContext = {
    params: Promise<{id: string}>
}

// Exculir tarefas
export async function DELETE (request: Request,
    {params}: RountContext) {

    const {id} = await params

    await prisma.todo.delete({
        where: {
                id: Number(id)
            }
    })

    return new NextResponse(null, {status: 204})
}

// Adicionar tarefas
export async function PATCH () {
    
}