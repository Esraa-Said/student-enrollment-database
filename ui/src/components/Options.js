import React from 'react';
import "../bootstrap/css/bootstrap.css";
import axios from 'axios';
import FunctionsOP, { getAllStudents } from './FunctionsOp';
import { getAllBtn, createSt, delbtn, onegroupstudentsbtn, groupSubjects, getinfo, searchfunctiondiv, stdGrades, updatestfun } from './Groups'
import './Options.css';


export default function Options() {
    const [isActive, setIsActive] = useState(false);
    function side() {
        setIsActive(!isActive);

    }

    return (

        <div className='' >
            <div >
            <button type="button" class="btn btn-primary toggle-sidebar" onClick={side}><i class="fa-solid fa-bars"></i></button>
            </div>
            <div className={isActive ? 'active sidebar bg-dark p-5' : 'sidebar bg-dark '} >

                <div className='text-light'> <h2 style={{ marginBottom: "60px", fontFamily: "cursive" }}>Options</h2></div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5 ' role='button' onClick={()=>{getAllBtn();side();}}  >Show all Students</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={()=>{createSt();side();}}>Add Student</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={()=>{delbtn();side();}}>Delete Student</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={()=>{updatestfun();side();}} role='button'>Update Student info</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' role='button'>Update Grade</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' onClick={()=>{onegroupstudentsbtn();side();}} role='button'>Show group Students + </button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={()=>{groupSubjects();side();}}>Show group Subjects</button>
                </div>
                <div >
                    <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={()=>{searchfunctiondiv();side();}}>Show student</button>
                </div>

                <div >
                    <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={()=>{getinfo();side();}}>Show group students <br></br> info</button>
                </div>

                <div >
                    <button className='btn btn-lg btn-secondary mb-5' role='button' onClick={()=>{stdGrades();side();}}>Show group students<br></br> grades </button>
                </div>

            </div></div>

    )
}