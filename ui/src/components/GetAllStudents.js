import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import { getAllStudents, } from './Options';
import FunctionsOp from './FunctionsOp';
import { Await, json } from 'react-router-dom';

export default function GetAllStudents() {
    const [data, setData] = useState([]);

    function GetData() {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/students`)
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => console.log(err));
        }, []);
    }
    GetData();

    const show = data.data?.map((student, index) => {
        return (
            <tr key={index}>
                <td>{student.student_id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.group_id}</td>
                <td>{student.group_name}</td>
                <td>{student.email}</td>
                <td>{student.phone_number}</td>
            </tr>
        );
    });


    return (
        <div>
            <Header/>
            <div id="getAll"
                  className="get w-75 mt-5 container-fluid"
                  style={{
                     overflow: "auto",
                     height: "78vh",
                     fontFamily: "Arial",
                     fontSize: "1vw",
                     textAlign: "center",
                  }}>
            <div className="table-responsive table-hover">
                <table class="table">
                    <thead>
                        <tr className="table-success">
                            <th>Student ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Group ID</th>
                            <th>Group Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {show}
                        {/* {JSON.stringify(data.data)} */}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}