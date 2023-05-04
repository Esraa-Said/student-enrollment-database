import React, { useState, useEffect } from 'react';
import "../bootstrap/css/bootstrap.css";
import { getAllBtn, createSt, delbtn, onegroupstudentsbtn, groupSubjects, getinfo, searchfunctiondiv, stdGrades, updatestfun } from './Groups'
import './Options.css';

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
                    <button className='btn btn-lg btn-secondary mb-5 ' onClick={() => { getAllBtn(); side(); }}  >Show All Groups' Students</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { createSt(); side(); }}>Add Student</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { delbtn(); side(); }}>Delete Student</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { updatestfun(); side(); }}>Update Student Info</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5'>Update Grade</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { onegroupstudentsbtn(); side(); }}>Show Group Students</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { groupSubjects(); side(); }}>Show Group Subjects</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { searchfunctiondiv(); side(); }}>Show Student</button>
                </div>

                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { getinfo(); side(); }}>Show Group Students Info</button>
                </div>

                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={() => { stdGrades(); side(); }}>Show Group Students Grades </button>
                </div>

            </div></div>
    );
}

export default Header;