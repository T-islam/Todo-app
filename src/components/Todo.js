import React from 'react';
import './Todo.css';
import { DiBitbucket } from "react-icons/di";
const Todo = ({title,decr,id,handleDelete}) => {
    
    
    return (
        <article className='todo-article'>
            <div>
                <h4>{title}</h4>
                <p>{decr}</p>
            </div>
            <div>
                <DiBitbucket onClick={()=>handleDelete(id)} className='icons'/>
            </div>
        </article>
    );
};

export default Todo;