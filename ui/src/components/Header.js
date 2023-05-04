import React, { useState, useEffect } from 'react';
import "../bootstrap/css/bootstrap.css";
import {  onegroupstudentsbtn, groupSubjects, getinfo, searchfunctiondiv, stdGrades, updatestfun } from './Groups'
import './Options.css';
import {id,groupid} from './Groups';

function Header() {
    const [isActive, setIsActive] = useState(false);
    
    function side() {
        setIsActive(!isActive);
    }



    return (
        <div>
            <div className="container-sm m-3 p-3 bg-dark"
                style={
                    { borderRadius: "10px", fontFamily: "cursive", fontSize: "2vw", color: "#ffffff" }
                }
            >
                <span >ESK for Student Enrollment
                    <button type="button" class="btn btn-secondary toggle-sidebar  "  onClick={side}>
                        <i class="fa-solid fa-bars"></i></button>
                </span>


            </div>
            <div className={isActive ? 'active sidebar bg-dark p-5' : 'sidebar bg-dark '} >

                <div className='text-light'> <h2 style={{ marginBottom: "60px", fontFamily: "cursive" }}>Options</h2></div>
                <div >
                    <a href= {`/select/${id}/groups/${groupid}/showAllStudents`} className='btn btn-lg btn-secondary mb-5 ' onClick={() => {  side(); }}  >Show All Groups' Students</a>
                </div>
                <div >
                    <a href= {`/select/${id}/groups/${groupid}/addstudent`}   className='btn btn-lg btn-secondary mb-5'  onClick={() => {  side(); }}>Add Student</a>
                </div>
                <div >
                    <a href={`/select/${id}/groups/${groupid}/deletestudent`} className='btn btn-lg btn-secondary mb-5' onClick={() => {  side(); }}>Delete Student</a>
                </div>
                <div >
                    <a href={`/select/${id}/groups/${groupid}/updateStudentInfo`} className='btn btn-lg btn-secondary mb-5' onClick={() => {  side(); }}>Update Student Info</a>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5'>Update Grade</button>
                </div>
                <div >
                    <a href={`/select/${id}/groups/${groupid}/oneGroupStudents`}  className='btn btn-lg btn-secondary mb-5' onClick={() => {  side(); }}>Show Group Students</a>
                </div>
                <div >
                    <a href={`/select/${id}/groups/${groupid}/showGroupSubjects`} className='btn btn-lg btn-secondary mb-5' onClick={() => {  side(); }}>Show Group Subjects</a>
                </div>
                <div >
                    <a href={`/select/${id}/groups/${groupid}/showStudent`} className='btn btn-lg btn-secondary mb-5' onClick={() => {  side(); }}>Show Student</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/showStudentsInfo`}  className='btn btn-lg btn-secondary mb-5' onClick={() => {  side(); }}>Show Group Students Info</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/showStudentsgrades`} className='btn btn-lg btn-secondary mb-5' onClick={() => { side(); }}>Show Group Students Grades </a>
                </div>

            </div></div>
    );
}

export default Header;