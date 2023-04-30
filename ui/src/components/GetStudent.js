
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
import { groupid } from './Groups';


export default function GetStudent() {
   const [groupstudent, setonegroupstudent] = useState([]);
   const [subject, setSubject] = useState([]);

   function Get() {
      useEffect(() => {
         axios
            .get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/${1}`)

            .then((res) => {
               setonegroupstudent(res.data)
               setSubject(res.data["student_data"][0]["grades"])


            })
            .catch((err) => console.log(err))
      }, [])
   }
   Get()

   const studentinput = document.getElementById("search_id");
   let id = -1;
   function Idfun() {

      //id = studentinput.value;


      let sche = document.getElementById("search_div");
      sche.style.display = "none";
   
      let data = document.getElementById("getstudent");
      data.style.display = "block";

      let dat = document.getElementById("m");
      data.style.display = "block";

   }
   console.log(groupstudent)



   return (
      <div>

         <div className="bg-light p-5 w-100" id="search_div"
            style={{ fontFamily: "cursive", fontSize: "1.2vw", position: "absolute" }}>
            <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student ID</h2>
            <form onSubmit={(event) => event.preventDefault()}>
               <div className="form-group row mb-5">
                  <label for="id" className="col-sm-3 col-form-label mr-2">
                     Student Id
                  </label>
                  <div class="col-sm-7">
                     <input type="text" class="form-control" placeholder="student's id" id="search_id" style={{ fontSize: "1.2vw" }} required></input>
                  </div>
               </div>
               <button type="submit" class="btn btn-danger" onClick={Idfun} >
                  Search
               </button>
            </form>
         </div>


         <div
            className="get w-100 bg-light"
            id="getstudent"
            style={{
               overflow: "auto",
               height: "78vh",
               fontFamily: "Arial",
               fontSize: "1vw",
               textAlign: "center",
               position: "absolute",
               display: "none"


            }}>
               <div id="m" style={{display:"none"}}>kkk</div>
            <div className="table-responsive">
               <table class="table">
                  <thead >
                     <tr className="table-success">
                        <th>student_id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>group_id</th>
                        <th>email</th>
                        <th>phone_number</th>
                        {subject.map((v, i) => {
                           return <th>{v.subject_name}</th>
                        })}
                     </tr>
                     {/* <tr>
                              <td>{groupstudent["student_data"]["student_id"]}</td>
                              <td>{groupstudent["student_data"]["first_name"]}</td>
                              <td>{groupstudent["student_data"]["last_name"]}</td>
                              <td>{groupstudent["student_data"]["group_id"]}</td>
                              <td>{groupstudent["student_data"]["email"]}</td>
                              <td>{groupstudent["student_data"]["phone_number"]}</td>
                              {groupstudent["student_data"]["grades"].map((grade) => {
                                 return (
                                    <td>
                                       {grade.grade}
                                       <br></br>
                                       {grade.status}
                                    </td>
                                 )
                              })}
                           </tr> */}
                  </thead>
                  <tbody>

                     {/* {JSON.stringify(data.data)}
										 */}
                  </tbody>
               </table>
            </div>
         </div>


      </div>
   )
}


