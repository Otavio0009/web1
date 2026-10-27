"use client"

import Pagina from "../Components/page.components";
import { TodoForm } from "../Components/Todo-list/todo-form.components";

export default function TodoListPage() {

  function addTodo(text: string) {
    console.log("Adicionado Tarefa: ", text)
  }

  return (
    <Pagina titulo="TodoList" subtitulo="Exemplo de Todo-list no React!">
        <TodoForm addTodo={addTodo}/>
    </Pagina>
  )
}
