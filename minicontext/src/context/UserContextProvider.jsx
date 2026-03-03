import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {   //destructuring , children is special prop passed by react //
    
    const [user, setUser]= React.useState(null) //useState hook
    
    return (
           <UserContext.Provider value ={{user,setUser}}>  //passing object in value & children can access it .//
             {children}      // can access user and setUser //
           </UserContext.Provider>
      )
}

export default UserContextProvider 


