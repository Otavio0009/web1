import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

// endpoint: consulta de todos (GET)

export async function GET() {
     // faz consulata utlizando o prisma
    const todos = await prisma.todo.findMany({
        orderBy: {
            id: "asc"
        }
    })

    // retorna o reslutado
    return NextResponse.json(todos);
}

// endpoint 
export async function POST(request: Request) {

    const body = await request.json()

    const newTodo = await prisma.todo.create({
        data: {
            text: body.text
        }
    })

    return NextResponse.json(newTodo, {status: 201})
} 