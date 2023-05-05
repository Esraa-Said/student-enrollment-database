import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import { id, groupid } from './Groups';

export default function ShowStudent() {

    let stid = window.location.pathname.split("/").slice(-1)[0];
    const [groupstudent, setonegroupstudent] = useState([]);
    const [subject, setSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/${stid}`);
                setonegroupstudent(res.data);
                setSubject(res.data["student_data"]["grades"]);
                setIsLoading(false);
            } catch (err) {
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
                className="get w-50 bg-light container-fluid mt-5"
                id="getsubjects"
                style={{
                    overflow: "auto",
                    fontFamily: "Arial",
                    fontSize: "1vw",
                    textAlign: "center",
                }}>

                <div className="table-responsive table-hover">
                    <table class="table">
                        <tbody >
                            <tr >
                                <td className="table-success " style={{width:'20vw'}}>Student ID</td>
                                <td>{groupstudent["student_data"]["student_id"]} </td>
                            </tr>

                            <tr >
                                <td className="table-success">First Name</td>
                                <td>{groupstudent["student_data"]["first_name"]}</td>
                            </tr>

                            <tr >
                                <td className="table-success">Last Name</td>
                                <td>{groupstudent["student_data"]["last_name"]}</td>
                            </tr>

                            <tr >
                                <td className="table-success">Group ID</td>
                                <td>{groupstudent["student_data"]["group_id"]}</td>
                            </tr>

                            <tr >
                                <td className="table-success">Email</td>
                                <td>{groupstudent["student_data"]["email"]}</td>
                            </tr>

                            <tr>
                                <td className="table-success">Phone Number</td>
                                <td>{groupstudent["student_data"]["phone_number"]}</td>
                            </tr>

                            {subject.map((v, i) => {
                                return <tr><td className="table-success">{v.subject_name}</td>
                                    <td>
                                        {v.grade}
                                        <br></br>
                                        {v.status}
                                    </td></tr>;
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}
