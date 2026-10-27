import { Todo } from "./todo.types";

type TodoItemProps = {
    todo: Todo,
    onCompletd: (id: number) => void,
    onDelete: (id: number) => void,
}

export function TodoItem(props: TodoItemProps) {

    const todo = props.todo
    const onCompletd = props.onCompletd
    const onDelete = props.onDelete

    return (
        <li>
            <input type="checkbox" onChange={() => onCompletd(todo.id)}/>
            <span>
                    Minha lista  
            </span>
            <button onClick={() => onDelete(todo.id)}>
                Excluir
            </button>
        </li>
    )
}