import React from 'react';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import Button from './components/Button';
import './style.css';

const App = () => {
  return (
    <div className='todo-container'> 
      <Header text="To Do List"/>
      <ToDoItem text="Learn React"/>
      <ToDoItem text="Learn React" completed={true}/>
      <ToDoItem text="Learn React"/>
      <ToDoItem text="Learn React"/>
      <ToDoItem text="Learn React"/>
      <Button />
    </div>
  )
}

export default App;
