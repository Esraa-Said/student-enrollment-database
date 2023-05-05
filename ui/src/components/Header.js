import React, { useState } from 'react';
import "../bootstrap/css/bootstrap.css";
import './Options.css';
import { id, groupid } from './Groups';

function Header() {
    const [isActive, setIsActive] = useState(false);
    let elements = document.querySelectorAll('div .disable');

    function side() {
        setIsActive(!isActive);
    }



    if (id === '1') {
        for (let i = 0; i < elements.length; ++i) {
            elements[i].style.pointerEvents = 'none';
            elements[i].style.cursor = 'default';
            elements[i].style.opacity = 0.7;
        }
    }

    return (
        <div>
            <div className="container-sm m-3 p-3 bg-dark"
                style={
                    { borderRadius: "10px", fontFamily: "cursive", fontSize: "2vw", color: "#ffffff" }
                }
            >
                <span >ESK for Student Enrollment
                    <button type="button" class="btn btn-secondary toggle-sidebar  " onClick={side}>
                        <i class="fa-solid fa-bars"></i></button>
                </span>
            </div>
            <div className={isActive ? 'active sidebar bg-dark p-5' : 'sidebar bg-dark '} id="sideid" >
                <div className='text-light'>
                    <h2 style={{ marginBottom: "60px", fontFamily: "cursive",fontSize:"1.2vw" }}>Options</h2>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/showAllStudents`} className='btn btn-lg btn-secondary mb-5 ' onClick={() => { side(); }} style={{fontSize:"1vw"}}  >Show All Groups' Students</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/oneGroupStudents`} className='btn btn-lg btn-secondary mb-5' onClick={() => { side(); }} style={{fontSize:"1vw"}}>Show Group Students</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/showStudentsInfo`} className='btn btn-lg btn-secondary mb-5' onClick={() => { side(); }} style={{fontSize:"1vw"}}>Show Group Students Info</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/showStudentsgrades`} className='btn btn-lg btn-secondary mb-5' onClick={() => { side(); }}style={{fontSize:"1vw"}}>Show Group Students Grades </a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/showGroupSubjects`} className='btn btn-lg btn-secondary mb-5' onClick={() => { side(); }}style={{fontSize:"1vw"}}>Show Group Subjects</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/showStudent`} className='btn btn-lg btn-secondary mb-5' onClick={() => { side(); }}style={{fontSize:"1vw"}}>Show Student</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/addstudent`} className='disable btn btn-lg btn-secondary mb-5' onClick={() => { side(); }}style={{fontSize:"1vw"}}>Add Student</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/deletestudent`} className='disable btn btn-lg btn-secondary mb-5' onClick={() => { side(); }}style={{fontSize:"1vw"}}>Delete Student</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/updateStudentInfo`} className='disable btn btn-lg btn-secondary mb-5' onClick={() => { side(); }}style={{fontSize:"1vw"}}>Update Student Info</a>
                </div>

                <div >
                    <a href={`/select/${id}/groups/${groupid}/updateStudentGrades1`} className='disable btn btn-lg btn-secondary mb-5'style={{fontSize:"1vw"}}>Update Grade</a>
                </div>

            </div>
        </div>
    );
}

export default Header;