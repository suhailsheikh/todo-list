import React, { useState } from 'react'
import './assets/css/App.css'

import { Todo } from '../types/TodoType'
import { Todos } from '../data/Todos'
import { TabContent } from '../components/TabContent'

const App = (): JSX.Element => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(Todos);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (todo === '') {
      alert('Please add a todo!');
      return;
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: todo,
      isComplete: false
    };

    setTodos([...todos, newTodo]);
    setTodo('');
  }
  
  const deleteItem = (id: string): void => {
    const todoItem = todos.find(x => x.id === id) as Todo;
    const index = todos.indexOf(todoItem, 0);
    const newTodos = [...todos];

    if (index > -1) {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  }

  const toggleCompleted = (id: string): void => {
    const newTodos = [...todos];
    
    let todoItem = newTodos.find(x => x.id === id) as Todo;
    todoItem.isComplete = !todoItem.isComplete;

    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder="What would you like to do today?" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button>Add Item</button>
      </form>
      <TabContent todos={todos} toggleCompleted={toggleCompleted} deleteItem={deleteItem} />
    </div>
  )
}

export default App
