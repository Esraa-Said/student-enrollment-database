import React, { useState, useEffect } from 'react';
import axios from "axios"
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import { getAllStudents, } from './Options';
import FunctionsOp from './FunctionsOp';
import { Await, json } from 'react-router-dom';


{/* start get All students */}

export function gitAllBtn() {
    let getbtn = document.getElementById("getAll");

    getbtn.style.display = "block";
 }
 

export function getAllstudents(props){

<div
className="get w-100 "
id="getAll"
style={{
   display: "none",
   overflowY: "auto",
   height: "75vh",
   fontFamily: "Arial",
   fontSize: "1vw",
   textAlign: "center",
   position: "absolute"
}}>
<div className="table-responsive">
   <table class="table">
      <thead>
         <tr className="table-success">
            <th>student_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>group_id</th>
            <th>email</th>
            <th>phone_number</th>
         </tr>
      </thead>
      <tbody>
         {props}
         {/* {JSON.stringify(data.data)}
                       */}
      </tbody>
   </table>
</div>
</div>
}
{/* end get All students */}