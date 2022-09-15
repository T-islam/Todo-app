
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos'
function App() {
  

  const [todoList, settodoList] = useState([])

  const handleGetData = (todo) =>{
    settodoList([...todoList,todo] )
  }

  const handleDelete =(id) =>{
    const newTodo = todoList.filter(todo => todo.id !== id)
    settodoList(newTodo);
}
  return (
    <div className="App-Body">
        <h2 style={{color:"white"}}>Welcome to TODO Apps</h2>
        <TodoForm handleGetData={handleGetData}/>
        <Todos todoList={todoList} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
