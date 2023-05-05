import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import { groupid } from './Groups';
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
                setIsLoading(false);
            }
        }
        fetchData();
        console.log(groupstudent)

    }, []);
    console.log(groupstudent.student_data.student_id)

    function submit() {

    }

    if (!groupstudent) {
        return <div>Loading...</div>;
    }


    return (
        // <div>
        //     <Header />
        //     <div className="bg-light w-75 p-5 container-fluid mt-5 " id="getdata"
        //         style={{ fontFamily: "cursive", fontSize: "1.2vw" }}>
        //         <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Student Grades</h2>
        //         <form >
        //             <div className="form-group row mb-5">
        //                 <label for="id" className="col-sm-3 col-form-label mr-2">
        //                     Student ID
        //                 </label>
        //                 <div class="col-sm-7">
        //                     <input type="text" class="form-control" readonly placeholder="student's id" id="id0" style={{ fontSize: "1.2vw" }} value={groupstudent.student_data.student_id}></input>
        //                 </div>
        //             </div>


        //             {subject.map((v, i) => {
        //                 return <th>{v.subject_name}</th>;
        //             })}

        //             <a href='' type="submit" class="btn btn-primary" id="submitForm" onClick={submit}>
        //                 Update
        //             </a>
        //         </form>
        //     </div>

        // </div>
        <div>
        </div>
    )


}