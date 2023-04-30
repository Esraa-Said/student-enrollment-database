
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


export default function ShowGroupSubjects() {

    const [groupSubjects, setgroupSubjects] = useState([]);
    function Get() {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/subjects`)

                .then((res) => {
                    setgroupSubjects(res.data)

                })
                .catch((err) => console.log(err))
        }, [])

    }
    Get();


    const showsubjects = groupSubjects["data"]?.map((subject, index) => {
        return (
            <tr key={index}>
                <td>         {subject.subject_name}
                </td>


            </tr>
        )
    })

    return (
        <div >
            <div
                className="get  w-25 bg-light"
                id="getsubjects"
                style={{
                    overflow: "auto",
                    height: "78vh",
                    fontFamily: "Arial",
                    fontSize: "1vw",
                    textAlign: "center",
                    position: "absolute",

                    left: "30%"
                }}>
                <div className="table-responsive table-hover">
                    <table class="table">
                        <thead >
                            <tr className="table-success">
                                <th>subject name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {showsubjects}
                            {/* {JSON.stringify(data.data)}
										 */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}