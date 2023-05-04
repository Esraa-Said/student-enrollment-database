import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";

export default function ShowStudentInfoup() {

    let id = window.location.pathname.split("/").slice(-1)[0];
    const [groupstudent, setonegroupstudent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [checkId, setCheckId] = useState(false);

    const [checkId, setCheckId] = useState(false);


  

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/student/${id}`
                );
                setonegroupstudent(res.data);
                setIsLoading(false);
            } catch (err) {
                setCheckId(true);
                setIsLoading(false);
            }
        }
        fetchData();
        console.log(groupstudent);


    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (checkId) {
        return <div>no id = {id}</div>;
    }

    async function updateest(x) {
        const { data } = await axios.patch(`${process.env.REACT_APP_BASE_URL}/student/${id}`, x);
        console.log(data);
    }

    let validation = true
    function submit() {
        var dast = {};
        let d = document.getElementById("id0");
        let fn = document.getElementById("fn");
        let ln = document.getElementById("ln");
        let gn = document.getElementsByClassName("groupcheck");
        let em = document.getElementById("em");
        let pn = document.getElementById("pn");

        // validation insert
        let x = 0;
        for (let i = 0; i < 4; i++) {
            if (gn[i].checked === true) {
                x = i + 1;
                break;
            }
        }

        dast["first_name"] = fn.value;
        dast["student_id"] = d.value;
        dast["last_name"] = ln.value;
        dast["group_id"] = x;
        dast["email"] = em.value;
        dast["phone_number"] = pn.value;

        //validation update
        let pattern = "^[^0-9]*$";
        if (fn.value.length < 3) console.log("first name is too short");
        if (ln.value.length < 3) console.log("last name is too short");
        if (fn.value.length >= 100) console.log("first name is too long");
        if (ln.value.length >= 100) console.log("last name is too long");
        if (fn.value.match(pattern) === null)
            console.log("name should not has numbers");
        if (ln.value.match(pattern)  === null)
            console.log("name should not has numbers");

        let phoneRegx = /^(010|012|015|011)\d{8}$/;
        if (pn.value.match(phoneRegx) === null)
            console.log("validate phone number");
        // end validation

        updateest(dast);
        alert("updated");
      
    }
    
    return (
        <div>
            <div className="bg-light w-100 p-5" id="getdata"
                style={{ fontFamily: "cursive", fontSize: "1.2vw", position: "absolute" }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Student Information</h2>
                <form >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly placeholder="student's id" id="id0" style={{ fontSize: "1.2vw" }} value={groupstudent[0].student_id}></input>
                        </div>
                    </div>


                    <div className="form-group row  mb-5">
                        <label for="firstN" className="col-sm-3 col-form-label mr-2">
                            Fisrt Name
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="fn" placeholder="student's first name" style={{ fontSize: "1.2vw" }} defaultValue={groupstudent[0].first_name}></input>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="lastN" className="col-sm-3 col-form-label mr-2">
                            Last Name
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="ln" style={{ fontSize: "1.2vw" }} placeholder="student's last name" defaultValue={groupstudent[0].last_name}></input>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="email" className="col-sm-3 col-form-label mr-2">
                            Email
                        </label>
                        <div class="col-sm-7">
                            <input type="email" class="form-control" id="em" style={{ fontSize: "1.2vw" }} placeholder="student's email" defaultValue={groupstudent[0].email}></input>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="phoneN" className="col-sm-3 col-form-label mr-2">
                            Phone Number
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="pn" style={{ fontSize: "1.2vw" }} placeholder="student's phone number" defaultValue={groupstudent[0].phone_number}></input>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="GroupN" className="col-sm-3 col-form-label mr-2">
                            Academic Year
                        </label>
                        <div className="col-sm-7">
                            <input className="ml-2 groupcheck" type="radio" id="g1" style={{ fontSize: "1.2vw" }} name="group" ></input>
                            <label class="mr-2 ml-2" for="g1">
                                1
                            </label>

                            <input type="radio" className="ml-2 groupcheck" id="g2" style={{ fontSize: "1.2vw" }} name="group"></input>

                            <label class=" ml-2 mr-2" for="g2">
                                2
                            </label>

                            <input type="radio" className="ml-2 groupcheck" id="g3" style={{ fontSize: "1.2vw" }} name="group"></input>
                            <label class="ml-2 mr-2" for="g3">
                                3
                            </label>

                            <input type="radio" id="g4" className="ml-2 groupcheck" style={{ fontSize: "1.2vw" }} name="group"></input>

                            <label class="mr-2 ml-2" for="g4">
                                4
                            </label>
                        </div>
                    </div>
                    <a href='' type="submit" class="btn btn-primary" id="submitForm" onClick={submit}>
                        Add
                    </a>
                </form>
                {/* {acadmeic()} */}
            </div>

        </div>
    );
}
