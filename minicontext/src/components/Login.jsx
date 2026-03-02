import React ,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    
    const {setUser} = useContext(UserContext) //const { setUser }  just destructuring  //useContext(UserContext) accesses global data stored inside UserContext.It returns whatever value  Provider is giving.

    const handleSubmit=(e)=>{
         e.preventDefault()
         setUser({username,password})  //Store this object as the new user.
    }
    
    return(
       
        <div>
           <h2>Login</h2>
          
           <input type="text" 
           value = {username}
           onChange={(e)=>setUsername(e.target.value)}
           placeholder="username" />
          
          {"       "}

           <input type="text" 
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           placeholder="password"/>
          
           <button onClick={handleSubmit}>Submit</button>
        
        </div>
    )
}

export default Login
