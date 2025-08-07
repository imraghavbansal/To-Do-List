import React from 'react';

const ToDoItem = (args) => {
    return (
        <li className='todo-item'>
            <span>
            {args.completed ? <>✅</> : <input type="checkbox" />}
            <span className='todo-item-text'>{args.text}</span>
            </span>
            <p>...</p>
        </li>
    )
}

export default ToDoItem;