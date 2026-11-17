"use client"

import { useEffect, useState } from "react";
import Pagina from "../Components/page.components";
import { TodoForm } from "../Components/Todo-list/todo-form.components";
import { TodoList } from "../Components/Todo-list/todo-list.component";
import { Todo } from "../Components/Todo-list/todo.types";
import ServiceStorage from "../service/storage.service";

export default function TodoListPage() {

  const STORED_TODO_KEY = "todos";

  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoded, setIsLoded] = useState(false);

  useEffect(() => {
    const storageTodos = ServiceStorage.get<Todo[]>(STORED_TODO_KEY);

    if (storageTodos) {
      setTodos(storageTodos);
    }

    setIsLoded(true);
  }, []);

  useEffect(() => {
    if (isLoded) {
      ServiceStorage.set<Todo[]>(STORED_TODO_KEY, todos);
    }
  }, [todos, isLoded]);

  function nextId(): number {
    return todos.reduce((max, todo) => {
      if (max > todo.id) {
        return max;
      }
      return todo.id;
    }, 0) + 1;
  }

  function addTodo(text: string) {
    const newTodo: Todo = {
      id: nextId(),
      text: text,
      completed: false
    };
    const newTodos = [...todos, newTodo];
    sortTodo(newTodos);
    setTodos(newTodos);
  }

  function onComplet(id: number) {
    const newTodo = todos.map((item: Todo) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });

    sortTodo(newTodo);
    setTodos(newTodo);
  }

  function sortTodo(todos: Todo[]) {
    todos.sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  function onDelete(id: number) {
    const newTodo = todos.filter((item: Todo) => item.id !== id);
    setTodos(newTodo);
  }

  return (
    <Pagina titulo="TodoList" subtitulo="Exemplo de Todo-list no React!">
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos}
        onComplet={onComplet}
        onDelete={onDelete}
      />
    </Pagina>
  );
}