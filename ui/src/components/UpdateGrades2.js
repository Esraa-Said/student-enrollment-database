import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import { groupid ,id} from './Groups';
import Header from './Header';


export default function UpdateGrades2() {
    let stid = window.location.pathname.split("/").slice(-1)[0];
    const [groupstudent, setonegroupstudent] = useState([null]);
    const [isLoading, setIsLoading] = useState(false);
    const [subject, setSubject] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {

                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/${stid}`);
                setonegroupstudent(res.data);
                setSubject(res.data["student_data"]["grades"]);
                setIsLoading(true);
            } catch (err) {
                setIsLoading(true);
            }
        }
        fetchData();
    }, [stid]);

    async function Send(data)
    {
        await axios.patch(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/${stid}`, data);
        alert("updated")
    }

    function submit() {
        let grades = document.getElementsByTagName("input")

        var gradesStudent = {};
        for (let i = 1; i <= subject.length; i++) 
            gradesStudent[subject[i-1].subject_name] = grades[i].value;
    
        console.log(gradesStudent)
        Send(gradesStudent);
    }

    if (!isLoading) {
        return <div>Loading...</div>;
    }
    return (

        <div>
            <Header />
            <div className="bg-light w-75 p-5 container-fluid mt-5 " id="getdata"
                style={{ fontFamily: "cursive", fontSize: "1.2vw", }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Student Grades</h2>
                <form  >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly placeholder="student's id" id="id0" style={{ fontSize: "1.2vw" }} value={groupstudent.student_data.student_id}></input>
                        </div>
                    </div>

                    <div className='table-responsive table-hover table-border ' style={{ marginTop: "100px" }} >
                        <table className='table '>
                            <thead>
                                <tr className='bg-warning' style={{ fontSize: "1.2vw" }} >
                                    <th x>
                                        {subject[0].subject_name}
                                    </th>
                                    <th>
                                        {subject[1].subject_name}
                                    </th>
                                    <th>
                                        {subject[2].subject_name}
                                    </th>
                                    <th>
                                        {subject[3].subject_name}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[0].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[1].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[2].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[3].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-responsive table-hover table-border ' >
                        <table className='table '>
                            <thead>
                                <tr className='bg-warning' style={{ fontSize: "1.2vw" }} >
                                    <th x>
                                        {subject[4].subject_name}
                                    </th>
                                    <th>
                                        {subject[5].subject_name}
                                    </th>
                                    <th>
                                        {subject[6].subject_name}
                                    </th>
                                    <th>
                                        {subject[7].subject_name}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[4].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[5].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[6].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[7].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-responsive table-hover table-border ' >
                        <table className='table '>
                            <thead>
                                <tr className='bg-warning' style={{ fontSize: "1.2vw" }} >
                                    <th x>
                                        {subject[8].subject_name}
                                    </th>
                                    {subject.map((v,i)=>{
                                        if(i>8){
                                            return (
                                                <th x>
                                                    {subject[i].subject_name}
                                                </th>
                                            );
                                        }
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[8].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                    {subject.map((v,i)=>{
                                        if(i>8){
                                            return <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[i].grade} style={{ fontSize: "1.2vw" }} />
                                    </td>
                                        }
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href='#' type="submit" class="btn  btn-danger" id="submitForm" style={{ fontSize: "1.3vw", }} onClick={submit}>
                        Update
                    </a>
                </form>
            </div>
            <a style={{ position: "fixed", top: "95%", left: "3%", cursor: "pointer" }} href={`/select/${id}`}>
            <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl"></i>

         </a>
        </div>

    )


}