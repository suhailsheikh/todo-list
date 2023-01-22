import { Todo } from '../types/TodoType'

export const Todos: Todo[] = [
    { 
        id: crypto.randomUUID(), 
        text: 'Vite.js', 
        isComplete: false 
    },
    { 
        id: crypto.randomUUID(), 
        text: 'React', 
        isComplete: false 
    },
    { 
        id: crypto.randomUUID(), 
        text: 'JavaScript', 
        isComplete: true 
    }
];