import React from 'react';
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import './Options.css';
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

let temp = group.split('/');
export const groupid = temp[6];
export const id = temp[4];



export default function Groups() {


   return (
      <div>
         <Header />

         <div className="d-flex  justify-content-center  align-content-around  ">
            .
      


            <div className=" ml-3 mt-5 mr-3  " style={{ width: "76vw", height: "75vh", position: "relative" }}>








              
               {/* end one group students info */}


               {/* start show one student in specific group */}

               <div
                  className="get w-100 bg-light"
                  id="getstudent"
                  style={{  overflow: "auto",
                  height: "78vh",
                  fontFamily: "Arial",
                  fontSize: "1vw",
                  textAlign: "center",
                  display: "none",
                  position: "absolute" }}>
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
                  <GroupStudentsGrades />
               </div>

               {/* end students grades */}

               <div id="updatestudent" style={{ display: "none" }}>
                  <UpdateStudent />
               </div>

            </div>
         </div>
      </div>
   )
}

