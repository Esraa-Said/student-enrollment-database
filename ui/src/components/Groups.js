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
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';
import GetStudent from './GetStudent';
import GroupStudentsGrades from './GroupStudentsGrades';
import UpdateStudent from './UpdateStudentInfo';

// determine the group 
export const group = window.location.href;

group.split('/');
export const groupid = group[group.length - 1];
console.log(groupid)



export function createSt() {
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   let info = document.getElementById("getinfo")
   info.style.display = "none";
   sub.style.display = "none";
   gst.style.display = "none";
   getbtn.style.display = "none";
   del.style.display = "none";
   cr.style.display = "block";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
}

////

export function updatestfun()
{
   let up = document.getElementById("updatestudent");
   up.style.display = "block";
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   let info = document.getElementById("getinfo")
   info.style.display = "none";
   sub.style.display = "none";
   gst.style.display = "none";
   getbtn.style.display = "none";
   del.style.display = "none";
   cr.style.display = "none";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";
}

// show all


export function getAllBtn() {
   let getbtn = document.getElementById("getAll");
   let cr = document.getElementById("addSt");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   let info = document.getElementById("getinfo")
   info.style.display = "none";
   sub.style.display = "none";
   gst.style.display = "none";
   cr.style.display = "none";
   del.style.display = "none";
   getbtn.style.display = "block";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
}



// delete student 


export function delbtn() {
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   let info = document.getElementById("getinfo")
   info.style.display = "none";
   sub.style.display = "none";
   gst.style.display = "none";
   getbtn.style.display = "none";
   cr.style.display = "none";
   del.style.display = "block";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";

}

////

// get group students
export function onegroupstudentsbtn() {
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   let info = document.getElementById("getinfo")
   info.style.display = "none";
   sub.style.display = "none";
   del.style.display = "none";
   getbtn.style.display = "none";
   cr.style.display = "none";
   gst.style.display = "block";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
}

// get group subjects
export function groupSubjects() {
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   let info = document.getElementById("getinfo")
   info.style.display = "none";
   sub.style.display = "block";
   gst.style.display = "none";
   del.style.display = "none";
   getbtn.style.display = "none";
   cr.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
}

///  get students group info 
export function getinfo() {
   let info = document.getElementById("getinfo")
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   info.style.display = "none";
   sub.style.display = "none";
   gst.style.display = "none";
   getbtn.style.display = "none";
   cr.style.display = "none";
   del.style.display = "none";
   info.style.display = "block";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
}

export function searchfunctiondiv() {
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "block";
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   let info = document.getElementById("getinfo")
   info.style.display = "none";
   sub.style.display = "none";
   gst.style.display = "none";
   getbtn.style.display = "none";
   del.style.display = "none";
   cr.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "none";
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
}


export function stdGrades() {
   let info = document.getElementById("getinfo")
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   let sub = document.getElementById("getsubjects");
   info.style.display = "none";
   sub.style.display = "none";
   gst.style.display = "none";
   getbtn.style.display = "none";
   cr.style.display = "none";
   del.style.display = "none";
   info.style.display = "none";
   // let x = document.getElementById("search_div");
   // x.style.display = "none";
   let y = document.getElementById("getstudent");
   y.style.display = "none";
   let grades = document.getElementById("stdgrades");
   grades.style.display = "block";
   let up = document.getElementById("updatestudent");
   up.style.display = "none";
}

export default function Groups() {





   /////////////////////////////////////////////





   // const displayOptions = () => {
   //    let op = document.getElementById("op")
   //    if (op.style.display == "block") {
   //       op.style.display = "none"
   //       document.getElementsByClassName("icon")[0].style.display = "block"
   //       document.getElementsByClassName("icon")[1].style.display = "none"
   //    } else {
   //       op.style.display = "block"
   //       document.getElementsByClassName("icon")[0].style.display = "none"
   //       document.getElementsByClassName("icon")[1].style.display = "block"
   //    }
   // }

   return (
      <div>
         <Header />
         <div className="d-flex  justify-content-center  align-content-around  ">
            .
            {/* <div className='d-flex flex-wrap   align-content-around optionres align-self-start ' >
               <div className='icon align-self-center ml-5 ' style={{ width: "2vw", textAlign: "center", position: "fixed" }} >
                  <i class="fa-solid fa-arrows-turn-right " style={{ cursor: "pointer", fontSize: "2vw" }} onClick={displayOptions}></i>
               </div>

               <div id='op' style={{ display: "none", overflowY: "auto", height: "75vh", width: "270px", background: "red" }}>
                  <Options />
               </div>
               <div className='icon align-self-center ml-5 ' style={{ width: "2vw", textAlign: "center", position: "fixed", display: "none", zIndex: "2" }} >
                  <i class="fa-solid fa-xmark " style={{ cursor: "pointer", fontSize: "2vw", marginLeft: "200px" }} onClick={displayOptions}></i>
               </div>
            </div> */}
            <div className="bg-dark ml-5 mr-5 mt-3 options m-5  " style={{ width: "25vw", height: "75vh", borderRadius: "10px", overflowY: "auto" }}>
               <Options />
            </div>

            <div className=" ml-3 mt-5 mr-3 optionArea " style={{ width: "76vw", height: "75vh", position: "relative" }}>

               {/* start get All students */}

               <div id="getAll"
                  className="get w-100"
                  style={{
                     overflow: "auto",
                     height: "78vh",
                     fontFamily: "Arial",
                     fontSize: "1vw",
                     textAlign: "center",
                     display: "none",
                     position: "absolute"
                  }}><GetAllStudents /></div>
               {/* end get All students */}

               {/* start add student */}
               <div id="addSt"
                  className="get w-100"

                  style={{
                     overflow: "auto",
                     height: "78vh",
                     fontFamily: "Arial",
                     fontSize: "1vw",
                     textAlign: "center",
                     display: "none",
                     position: "absolute"
                  }}>
                  <AddStudent />
               </div>
               {/* end add student */}

               {/* start delete student */}

               <div className="bg-light w-100 p-5" id="del_div"
                  style={{
                     fontFamily: "cursive",
                     fontSize: "1.2vw",
                     display: "none",
                     position: "absolute"
                  }}>
                  <DeleteStudent />

               </div>

               {/* end delete student */}

               {/* start update student */}

               {/* end update student */}

               {/* start show group students */}

               <div id="getAllgroupstudent-div" className="get w-100"

                  style={{
                     overflow: "auto",
                     height: "78vh",
                     fontFamily: "Arial",
                     fontSize: "1vw",
                     textAlign: "center",
                     display: "none",
                     position: "absolute"
                  }}>
                  <GetOneGroupStudents />
               </div>
               {/* end show group students */}

               {/* start show subjects */}
               <div id="getsubjects"
                  className="get w-100"

                  style={{
                     overflow: "auto",
                     height: "78vh",
                     fontFamily: "Arial",
                     fontSize: "1vw",
                     textAlign: "center",
                     display: "none",
                     position: "absolute"
                  }}>
                  <ShowGroupSubjects />
               </div>
               {/* end show subjects */}

               {/* start one group students info */}


               <div id="getinfo"
                  className="get w-100"

                  style={{
                     overflow: "auto",
                     height: "78vh",
                     fontFamily: "Arial",
                     fontSize: "1vw",
                     textAlign: "center",
                     display: "none",
                     position: "absolute"
                  }}>
                  <GetInfoGroupStudents />
               </div>

               {/* end one group students info */}


               {/* start show one student in specific group */}

               <div
                  className="get w-100 bg-light" 
                  id="getstudent" 
                  style={{display:"none"}}> 
                  <GetStudent />
               </div>
               {/* end show one student in specific group */}



{/* start students grades */}

<div id="stdgrades" 
   className="get w-100"

   style={{
      overflow: "auto",
      height: "78vh",
      fontFamily: "Arial",
      fontSize: "1vw",
      textAlign: "center",
      display: "none",
      position: "absolute"
   }}
>
   <GroupStudentsGrades/>
</div>

{/* end students grades */}

<div id="updatestudent" style={{display:"none"}}>
<UpdateStudent/>
</div> 

            </div>



         </div>
      </div >
   )
}