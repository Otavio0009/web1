"use client"

import { useState } from "react";
import Pagina from "../Components/page.components";
import { TodoForm } from "../Components/Todo-list/todo-form.components";
import { TodoItem } from "../Components/Todo-list/todo-itme.components";
import { TodoList } from "../Components/Todo-list/todo-list.component";
import { Todo } from "../Components/Todo-list/todo.types";

export default function TodoListPage() {

  const[todos, setTodos] = useState<Todo[]>([])
   const[nextId, setNextId] = useState(1)

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: nextId,
      text: text,
      completed: false
    }

    setTodos (
      [...todos, newTodo]
    )

    setNextId(nextId + 1)
  }

  function onComplet(id: number) {
  const newTodo = todos.map((item: Todo) => {
    if (item.id === id) {
      return { ...item, completed: !item.completed }
    } else {
      return item
    }
  })

  setTodos(newTodo)
}

  function onDelete(id: number) {
    const newTodo = todos.filter((item: Todo) => item.id !== id)

    setTodos(newTodo)
  }

  return (
    <Pagina titulo="TodoList" subtitulo="Exemplo de Todo-list no React!">
      <TodoForm 
      addTodo={addTodo}/>
        <TodoList 
        todos={todos}
        onComplet={onComplet}
        onDelete={onDelete}
        />
    </Pagina>
  )
}
