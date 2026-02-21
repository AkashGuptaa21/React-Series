import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

 import App from './App.jsx'




function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}





//its custom react , & react ke render ka code (particular syntax) won't be same , so not works

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const anotheruser = "akash"


//JSX element , not function
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)



const reactElement = React.createElement(
    'a',  //tag
    { href:'https://x.com',target : '_blank'},  //attributes
    'click me to go to x' ,  //text or children
    anotheruser  //variable (evaluated expression)
)




createRoot(document.getElementById('root')).render(
 
  // MyApp()  //works //bcz its basically function //but don't do like this 
 
  <>
     <App />
     <MyApp />
    {reactElement}
    {anotherElement}
    {anotheruser}
  </>

 //anotherElement  //works

 //reactElement //works

 //ReactElement   //not works , bcz particular code format not same as of react's render  
 
)
