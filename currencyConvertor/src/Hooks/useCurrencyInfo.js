//custom hook

import { useEffect, useState } from "react"

function useCurrencyInfo(currency){

    const [data, setData] =useState({})

    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
         .then((res)=> res.json())   //string to json conversion
         .then((res) => setData(res[currency]))  //holding converted json into Data variable
   
    }, [currency])

    return data 
}

export default useCurrencyInfo ;

