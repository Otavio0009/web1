"use client"

import Pagina from "../Components/page.components";
import { TodoForm } from "../Components/Todo-list/todo-form.components";
import { TodoItem } from "../Components/Todo-list/todo-itme.components";
import { Todo } from "../Components/Todo-list/todo.types";

export default function TodoListPage() {

  function addTodo(text: string) {
    console.log("Adicionado Tarefa: ", text)
  }

  function onComplet(id: number) {

  }

  function onDelete(id: number) {

  }

  const newTodo: Todo = {
    id: 1,
    text: "Tarefa de teste",
    completed: false,
  }

  return (
    <Pagina titulo="TodoList" subtitulo="Exemplo de Todo-list no React!">
        <TodoForm addTodo={addTodo}/>
        <TodoItem todo={newTodo}
        onCompletd={onComplet}
        onDelete={onDelete}/>
    </Pagina>
  )
}
