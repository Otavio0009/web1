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

    const todoTextStyle = todo.completed ? "line-through" : "";

    return (
        <li className="list">
            <input
                type="checkbox"
                onChange={() => onCompletd(todo.id)}
                checked={todo.completed}
            />
            <span className={`text-lg flex-1 ${todoTextStyle}`}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)} className="btn btn_danger">
                Excluir
            </button>
        </li>
    )
}