import React, { FC, useState } from 'react'
import { Todo } from '../types/TodoType'
import { TodoItem } from '../components/TodoItem'

interface IProps {
  todos: Todo[],
  toggleCompleted: (id: string) => void,
  deleteItem: (id: string) => void
}

export const TabContent: FC<IProps> = ({ todos, toggleCompleted, deleteItem }): JSX.Element => {
  
  const [toggle, setToggle] = useState<number>(1);

  const activeItems = todos.reduce(function(filtered: Todo[], option: Todo) {
    if (!option.isComplete) {
      const filteredItem: Todo = { ...option };
      filtered.push(filteredItem);
    }
  
    return filtered;
  }, []);

  const completedItems = todos.reduce(function(filtered: Todo[], option: Todo) {
    if (option.isComplete) {
      const filteredItem: Todo = { ...option };
      filtered.push(filteredItem);
    }

    return filtered;
  }, []);

  return (
    <React.Fragment>
      <div className='tabs'>
        <div className={toggle === 1 ? 'tab active-tab' : 'tab'} onClick={() => setToggle(1)}>Active</div>
        <div className={toggle === 2 ? 'tab active-tab' : 'tab'} onClick={() => setToggle(2)}>Completed</div>
      </div>
      <div className='tab-content'>
        <div className={toggle === 1 ? 'content active-content' : 'content'}>
          {activeItems.length === 0 ? <p className='confirmation-message'>You have completed all your tasks!</p> : null}
          {activeItems.map((item: Todo) => {
            return <TodoItem key={item.id} 
                             name={item.text} 
                             completed={item.isComplete} 
                             toggleCompleted={() => toggleCompleted(item.id)} 
                             deleteItem={() => deleteItem(item.id)} />
          })}
        </div>
        <div className={toggle === 2 ? 'content active-content' : 'content'}>
          {completedItems.length === 0 ? <p className='confirmation-message'>You have completed all your tasks!</p> : null}
          {completedItems.map((item: Todo) => {
            return <TodoItem key={item.id} 
                             name={item.text} 
                             completed={item.isComplete} 
                             toggleCompleted={() => toggleCompleted(item.id)} 
                             deleteItem={() => deleteItem(item.id)} />
          })}
        </div>
      </div>
    </React.Fragment>
  )
}