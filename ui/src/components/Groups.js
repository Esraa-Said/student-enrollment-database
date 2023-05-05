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
         <a style={{position:"fixed",top:"95%",left:"3%",cursor:"pointer"}} href="">
         <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl"></i>

         </a>
               </div>
   )
}

