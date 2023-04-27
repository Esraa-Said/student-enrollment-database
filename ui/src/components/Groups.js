import React, { useState,useEffect } from 'react';
import axios from "axios"
import "../bootstrap/css/bootstrap.css";
import Header from './Header';

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
     <Header/>
      <div className='d-flex flex-wrap   align-content-around ' >
         <div className='bg-secondary ml-5 mr-5 mt-3' style={
            
           {width:"20vw",height:"80vh",borderRadius:"10px" }
            
         }>f</div>
         <div className='bg-danger ml-5 mt-5'
         style={
         {width:"20vw",height:"10vh" }}
         >f</div>

      </div>
    </div>

   );
}