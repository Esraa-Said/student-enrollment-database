import React, { useState,useEffect } from 'react';
import axios from "axios"
export default function Groups()
{

   const [data,setdate] = useState([{}])
   useEffect(()=>
   {
      fetch("/api").then(
         res =>res.json()
      ).then(
         data =>{
            setdate(data)
         }
      )
   },[]
   )
   
   return(
    <div>
    

    <div className='container bg-danger' >
mm
    </div>
    <div className='container bg-info' >
mm
    </div>
    </div>

   );
}