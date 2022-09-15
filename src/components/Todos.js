import React from 'react'
import Todo from './Todo'
import'./Todos.css'
const Todos = ({todoList,handleDelete}) => {
    
    return (
        <section className='todosContainer'>
            
            {
                todoList.map(todo=> <Todo key={todo.id} {...todo} handleDelete={handleDelete}/>)
            }
        </section>
    )
}

export default Todos;