import React, { useState, useEffect } from 'react';
import axios from "axios"
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import './Groups.css';
import { getAllStudents, } from './Options';
import FunctionsOp from './FunctionsOp';
import { Await, json } from 'react-router-dom';
import GetAllStudents from './GetAllStudents';
import GetInfoGroupStudents from './GetInfoGroupStudents';
import GetOneGroupStudents from './GetOneGroupStudents';
import ShowGroupSubjects from './ShowGroupSubjects';
import { groupid } from './Groups';
import { group } from './Groups';


export default function AddStudent()
{
    var dast = {};
async function createst(x) {
   const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/students`, x)
   console.log(data)

}


const submit = (event) => {
   //event.preventDefault();

   let id = document.getElementById("id");
   let fn = document.getElementById("fn");
   let ln = document.getElementById("ln");
   let gn = document.getElementsByClassName("groupcheck");
   let em = document.getElementById("em");
   let pn = document.getElementById("pn");
   // validation insert 
   let x = 0;
   for (let i = 0; i < 4; i++) {
      if (gn[i].checked == true) {
         x = i + 1;
         break;
      }
   }

   dast["first_name"] = fn.value;
   dast["student_id"] = id.value;
   dast["last_name"] = ln.value;
   dast["group_id"] = x;
   dast["email"] = em.value;
   dast["phone_number"] = pn.value;

   createst(dast);
   alert("added")


}

return(
    <div>
        <div className="bg-light w-100 p-5" id="addSt" 
        style={{ fontFamily: "cursive", fontSize: "1.2vw",  position: "absolute" }}>
                  <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student Information</h2>
                  <form onSubmit={submit}>
                     <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                           Student Id
                        </label>
                        <div class="col-sm-7">
                           <input type="text" class="form-control" placeholder="student's id" id="id" style={{ fontSize: "1.2vw" }} required></input>
                        </div>
                     </div>

                     <div className="form-group row  mb-5">
                        <label for="firstN" className="col-sm-3 col-form-label mr-2">
                           Fisrt Name
                        </label>
                        <div class="col-sm-7">
                           <input type="text" class="form-control" id="fn" placeholder="student's first name" style={{ fontSize: "1.2vw" }} required></input>
                        </div>
                     </div>

                     <div className="form-group row  mb-5">
                        <label for="lastN" className="col-sm-3 col-form-label mr-2">
                           Last Name
                        </label>
                        <div class="col-sm-7">
                           <input type="text" class="form-control" id="ln" style={{ fontSize: "1.2vw" }} placeholder="student's last name" required></input>
                        </div>
                     </div>

                     <div className="form-group row  mb-5">
                        <label for="email" className="col-sm-3 col-form-label mr-2">
                           Email
                        </label>
                        <div class="col-sm-7">
                           <input type="email" class="form-control" id="em" style={{ fontSize: "1.2vw" }} placeholder="student's email" required></input>
                        </div>
                     </div>

                     <div className="form-group row  mb-5">
                        <label for="phoneN" className="col-sm-3 col-form-label mr-2">
                           Phone Number
                        </label>
                        <div class="col-sm-7">
                           <input type="text" class="form-control" id="pn" style={{ fontSize: "1.2vw" }} placeholder="student's phone number" required></input>
                        </div>
                     </div>

                     <div className="form-group row  mb-5">
                        <label for="GroupN" className="col-sm-3 col-form-label mr-2">
                           Group Number
                        </label>
                        <div className="col-sm-7">
                           <input className="ml-2 groupcheck" type="radio" id="g1" style={{ fontSize: "1.2vw" }} name="group" required></input>
                           <label class="mr-2 ml-2" for="g1">
                              1
                           </label>

                           <input type="radio" className="ml-2 groupcheck" id="g2" style={{ fontSize: "1.2vw" }} name="group"></input>

                           <label class=" ml-2 mr-2" for="g2">
                              2
                           </label>

                           <input type="radio" className="ml-2 groupcheck" id="g3" style={{ fontSize: "1.2vw" }} name="group"></input>
                           <label class="ml-2 mr-2" for="g3">
                              3
                           </label>

                           <input type="radio" id="g4" className="ml-2 groupcheck" style={{ fontSize: "1.2vw" }} name="group"></input>

                           <label class="mr-2 ml-2" for="g4">
                              4
                           </label>
                        </div>
                     </div>

                     <a href={group} type="submit" class="btn btn-primary" onClick={submit}>
                        Add
                     </a>
                  </form>
               </div>
    </div>
)

}