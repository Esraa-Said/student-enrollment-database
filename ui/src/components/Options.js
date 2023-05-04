import React from 'react';
import "../bootstrap/css/bootstrap.css";
import { getAllBtn, createSt, delbtn, onegroupstudentsbtn, groupSubjects, getinfo, searchfunctiondiv, stdGrades, updatestfun } from './Groups';


export default function Options() {
    return (

        <div className='container w-100 mt-3 ' style={{ textAlign: "center" }}>
            <div className='text-light'> <h2 style={{ marginBottom: "60px", fontFamily: "cursive" }}>Options</h2></div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5 ' role='button' onClick={getAllBtn}  >Show all Students</button>
            </div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={createSt}>Add Student</button>
            </div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={delbtn}>Delete Student</button>
            </div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5' onClick={updatestfun} role='button'>Update Student info</button>
            </div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5' role='button'>Update Grade</button>
            </div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5' onClick={onegroupstudentsbtn} role='button'>Show group Students + </button>
            </div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={groupSubjects}>Show group Subjects</button>
            </div>
            <div >
                <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={searchfunctiondiv}>Show student</button>
            </div>

            <div >
                <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={getinfo}>Show Group Students<br></br> Info </button>
            </div>

            <div >
                <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={stdGrades}>Show Group Students<br></br> Grades </button>
            </div>

        </div>

    );
}