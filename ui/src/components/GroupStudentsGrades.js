import React, { useState, useEffect } from 'react';
import axios from "axios"
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import { getAllStudents, } from './Options';
import FunctionsOp from './FunctionsOp';
import { Await, json } from 'react-router-dom';
import GetAllStudents from './GetAllStudents';
import GetInfoGroupStudents from './GetInfoGroupStudents';
import GetOneGroupStudents from './GetOneGroupStudents';
import ShowGroupSubjects from './ShowGroupSubjects';
import { groupid } from './Groups';
import { group } from './Groups';




export default function GroupStudentsGrades()
{
    const [onegroupstudents, setonegroupstudents] = useState([]);
    const [subject, setSubject] = useState([]);

    function Get() {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/grades`)

                .then((res) => {
                    setonegroupstudents(res.data)
                    setSubject(res.data["students_data"][0]["grades"])
                })
                .catch((err) => console.log(err))
        }, [])


    }
    Get();
    console.log(onegroupstudents)

    const showgroupstudents = onegroupstudents["students_data"]?.map((student, index) => {
        return (
            <tr key={index}>
                <td>{student.student_id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                {student.grades.map((grade, index) => {
                    return (
                        <td>
                            {grade.grade}
                            <br></br>
                            {grade.status}
                        </td>
                    )
                })}
            </tr>
        )
    })


    return (
        <div>

            <div className="table-responsive table-hover">
                <table class="table">
                    <thead >
                        <tr className="table-success">
                            <th>student_id</th>
                            <th>first_name</th>
                            <th>last_name</th>
                   
                            {subject.map((v, i) => {
                                return <th>{v.subject_name}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {showgroupstudents}
                        {/* {JSON.stringify(data.data)}
										 */}
                    </tbody>
                </table>
            </div>
        </div>

    )

}