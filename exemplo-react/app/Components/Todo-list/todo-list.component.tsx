"use client"

import { TodoItem } from "./todo-itme.components";
import { Todo } from "./todo.types";

type TodoList = {
    todos: Todo[],
    onDelete: (id: number) => void,
    onComplet: (id: number) => void,
}

export function TodoList(props: TodoList) {
    if(props.todos.length === 0) {
        return (
            <p className="text-lg p-4">Nenhuma tarefa cadastrada.</p>
        )
    }

    return(
        <ul className="ul-list">
            {
                props.todos.map((item: Todo) => (
                    <TodoItem 
                    key={item.id}
                    todo={item}
                    onCompletd={props.onComplet}
                    onDelete={props.onDelete}

                    />
                ))
            }
        </ul>
    )
}