import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import './Groups.css';
import { group } from './Groups';

export default function UpdateStudent() {
    var dast = {};

    async function updatest(x, id) {
        const { data } = await axios.patch(`${process.env.REACT_APP_BASE_URL}/student/${id}`, x);
        console.log(data);
    }

    const [groupstudent, setonegroupstudent] = useState([]);
    const [id, setid] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/student/${id}`)

            .then((res) => {
                setonegroupstudent(res.data);
            })
            .catch((err) => console.log(err));


    }, [id]);

    function show() {
        return (
            <form onSubmit={submit}>
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
                        <input type="text" class="form-control" id="fn" placeholder="student's first name" style={{ fontSize: "1.2vw" }} required></input>
                    </div>
                </div>

                <div className="form-group row  mb-5">
                    <label for="lastN" className="col-sm-3 col-form-label mr-2">
                        Last Name
                    </label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="ln" style={{ fontSize: "1.2vw" }} placeholder="student's last name" required></input>
                    </div>
                </div>

                <div className="form-group row  mb-5">
                    <label for="email" className="col-sm-3 col-form-label mr-2">
                        Email
                    </label>
                    <div class="col-sm-7">
                        <input type="email" class="form-control" id="em" style={{ fontSize: "1.2vw" }} placeholder="student's email" required></input>
                    </div>
                </div>

                <div className="form-group row  mb-5">
                    <label for="phoneN" className="col-sm-3 col-form-label mr-2">
                        Phone Number
                    </label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="pn" style={{ fontSize: "1.2vw" }} placeholder="student's phone number" required></input>
                    </div>
                </div>

                <div className="form-group row  mb-5">
                    <label for="GroupN" className="col-sm-3 col-form-label mr-2">
                        Academic Year
                    </label>
                    <div className="col-sm-7">
                        <input className="ml-2 groupcheck" type="radio" id="g1" style={{ fontSize: "1.2vw" }} name="group" required></input>
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
                <a href={group} type="submit" class="btn btn-primary" onClick={submit}>
                    Add
                </a>
            </form>
        );

    }

    function Getidfunc() {
        let d = document.getElementById("search_id");
        setid(d.value);
        let divSearch = document.getElementById("getid");
        divSearch.style.display = "none";
        let divData = document.getElementById("getdata");
        divData.style.display = "block";
    }

    function submit() {

    }

    return (
        <div>
            <div id="getid" className="bg-light p-5 w-100"
                style={{ fontFamily: "cursive", fontSize: "1.2vw", position: "absolute" }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student ID</h2>
                <form >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student Id
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" placeholder="student's id" id="search_id" style={{ fontSize: "1.2vw" }} required></input>
                        </div>
                    </div>
                    <a href='#' type="submit" class="btn btn-danger" onClick={Getidfunc} >
                        Search
                    </a>
                </form>

            </div>


            <div className="bg-light w-100 p-5" id="getdata"
                style={{ fontFamily: "cursive", fontSize: "1.2vw", position: "absolute", display: "none" }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Student Information</h2>
                {show()}
            </div>

        </div>
    );

}