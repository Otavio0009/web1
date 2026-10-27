"use client";

import { useState } from "react";

type TodoFormProps = {
        addTodo: (text: string) => void
    }

export function TodoForm(props: TodoFormProps) {

    const [text, setText] = useState("")

    function handleAddTodo() {

        const todoText = text.trim()

        if (!todoText) {
            return
        } else {
            props.addTodo(todoText)
            setText("")
        }
    }

    return(
        <div className="flex gap-2">
            <input 
                placeholder="Nome da tarefa..." 
                className="input-text" 
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button 
                className="btn btn_primario"onClick={handleAddTodo}>Adicionar</button>
        </div>
    )
}