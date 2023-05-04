import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import './Groups.css';

export default function ShowStudent() {

    let id = window.location.pathname.split("/").slice(-1)[0];
    const [groupstudent, setonegroupstudent] = useState([]);
    const [subject, setSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let g = window.location.pathname.split("/").slice(-2)[0];


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/group/${g}/students/${id}`);
                setonegroupstudent(res.data);
                setSubject(res.data["student_data"]["grades"]);
                setIsLoading(false);
            }
            catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        }
        fetchData();
    });

    if (isLoading) {
        return <div>Loading...</div>;
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
                                <th className="table-success " >Student ID</th>
                                <td>{groupstudent["student_data"]["student_id"]} </td>
                            </tr>

                            <tr >
                                <th className="table-success">First Name</th>
                                <td>{groupstudent["student_data"]["first_name"]}</td>
                            </tr>

                            <tr >
                                <th className="table-success">Last Name</th>
                                <td>{groupstudent["student_data"]["last_name"]}</td>
                            </tr>

                            <tr >
                                <th className="table-success">Group ID</th>
                                <td>{groupstudent["student_data"]["group_id"]}</td>
                            </tr>

                            <tr >
                                <th className="table-success">Email</th>
                                <td>{groupstudent["student_data"]["email"]}</td>
                            </tr>

                            <tr>
                                <th className="table-success">Phone Number</th>
                                <td>{groupstudent["student_data"]["phone_number"]}</td>
                            </tr>

                            {subject.map((v, i) => {
                                return <tr><th className="table-success">{v.subject_name}</th>
                                    <td>
                                        {v.grade}
                                        <br></br>
                                        {v.status}
                                    </td></tr>;
                            })}
                        </tbody>

                    </table>
                </div>
            </div >
        </div>
    );
}