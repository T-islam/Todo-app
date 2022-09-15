import React from 'react';
import { useState } from 'react';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';
const TodoForm = ({handleGetData}) => {
    const id = uuidv4().slice(0,8)
   
    const [inputValue, setinputValue] = useState({title:'',decr:''})
    let {title,decr} = inputValue;
   const handlegetValues = (e)=>{
       const name = e.target.name;
       const values = e.target.value;
       setinputValue({...inputValue,[name]:values, id})
       
   }
    const handleSubmit =(e)=>{
       
        
        handleGetData(inputValue)
        setinputValue({title:'',decr:''})
        e.preventDefault()
    }
    return (
        <form className='form-section'>
            <div className='form-content'>
                <label htmlFor='title'>Title :</label>
                <input type='text' name='title' className='textField' onChange={handlegetValues} value={title}/>
            </div>
            <div className='form-content'>
                <label htmlFor='derc'>decription :</label>
                <textarea type='text' name='decr' className='textField' style={{height:"60px"}} onChange={handlegetValues} value={decr}/>
            </div>
            <button style={{width: "139px",alignSelf: "center"}} onClick={handleSubmit}>Add List</button>
        </form>
    );
};

export default TodoForm;