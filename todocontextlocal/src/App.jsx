import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
   
  const [todos, setTodos] = useState([])   //todos : array of todo


  const addTodo = (todo) =>{
    setTodos((prev)=> [{id:Date.now(),...todo} , ...prev ])   //prev : previous todos array  // ... spread 
  }


   const updateTodo= (id,todo) =>{      //id of todo which we want to update 
       setTodos((prev) => prev.map( (prevTodo) => (prevTodo.id===id ? todo : prevTodo))) //prev : previous todos array 
                                             //map for looping over each todo 
                                             //prevTodo:each item in array 
                                            //ternary operator for matching id for updation
  }


  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter( (todo)=> todo.id !== id)) //prev : previous todos array 
  }
   

  const toggleComplete = (id) => {   
    setTodos((prev) => prev.map( (prevTodo) => (prevTodo.id===id ?  {...prevTodo , completed: !prevTodo.completed}  :  prevTodo) ))
                                                                  //... spread operator : copies all existing fields , then overwriting completed   
}


 useEffect(()=>{  
    
    //getting //load todos from localStorage  
     const todos = JSON.parse(localStorage.getItem("todos")) //when app first loads, it tries to get saved todos from localstorage

     //setting  //checking if todo exists
     if(todos && todos.length >0){
        setTodos(todos)     //refresh krne pr v todos not disappear
     }
 
    }, [])   // running only once when component mounts 

    //  

    useEffect(()=>{
         //save todos to localStorage
        localStorage.setItem("todos",JSON.stringify(todos))  
   
    }, [todos])  //every time todos change , they r saved to localstorage


  return (
    <TodoProvider value ={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
       <div className="bg-[#172842] min-h-screen py-8">
               
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}

                    </div>
                </div>
       
        </div>
    </TodoProvider>
  )
}

export default App
