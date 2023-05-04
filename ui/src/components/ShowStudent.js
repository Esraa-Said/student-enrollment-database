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
import { group, groupid } from './Groups';
import { Link } from 'react-router-dom';

export default function ShowStudent() {

    let id = window.location.pathname.split("/").slice(-1)[0]
    const [groupstudent, setonegroupstudent] = useState([]);
    const [subject, setSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [RequestError, setRequestError] = useState([])
		let g = window.location.pathname.split("/").slice(-2)[0]

		useEffect(() => {
			async function fetchData() {
				try {
					const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/group/${g}/students/${id}`)
					setonegroupstudent(res.data)
					setSubject(res.data["student_data"]["grades"])
					setIsLoading(false)
				} catch (err) {
					console.log(err.response)
					setRequestError(err.response)
					// debugger
					setIsLoading(false)
				}
			}
			fetchData()
		}, [id, g])

		if (isLoading) {
			return <div>Loading...</div>
		}

		if (RequestError && RequestError.status === 400) {
			return <div>{RequestError.data.err}</div>
		}

    return (

        <div>
            <Header />

            <div
                className=" container bg-light"
                id="get"
                style={{
                    overflow: "auto",
                    height: "78vh",
                    fontFamily: "Arial",
                    fontSize: "1vw",
                    textAlign: "center",
                    position: "absolute",


                }}>
                <div className="table-responsive table-hover" >
                    <table class="table ">
                        <tbody >
                            <tr >
                                <th className="table-success " >student_id</th>
                                <td>{groupstudent["student_data"]["student_id"]} </td>

                            </tr>
                            <tr >
                                <th className="table-success">first_name</th>
                                <td>{groupstudent["student_data"]["first_name"]}</td>

                            </tr>

                            <tr >
                                <th className="table-success">last_name</th>
                                <td>{groupstudent["student_data"]["last_name"]}</td>


                            </tr>

                            <tr >
                                <th className="table-success">group_id</th>
                                <td>{groupstudent["student_data"]["group_id"]}</td>

                            </tr>
                            <tr >
                                <th className="table-success">email</th>
                                <td>{groupstudent["student_data"]["email"]}</td>

                            </tr>
                            <tr>
                                <th className="table-success">phone_number</th>
                                <td>{groupstudent["student_data"]["phone_number"]}</td>

                            </tr>
                            {subject.map((v, i) => {
                                return <tr><th className="table-success">{v.subject_name}</th>  
                                <td>
                                {v.grade}
                                <br></br>
                                {v.status}
                            </td></tr>
                            })}
                        </tbody>
                        
                    </table>
                </div>
            </div >
        </div>
    )
}
