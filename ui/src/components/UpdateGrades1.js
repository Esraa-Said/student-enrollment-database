import React from 'react';
import "../bootstrap/css/bootstrap.css";
import { groupid, id } from './Groups';
import Header from './Header';


export default function UpdateGrades1() {

    function getidfunc() {
        let d = document.getElementById("input_id");
        console.log(d.value);

        let link = document.getElementById("search_link");
        link.setAttribute("href", `/select/${id}/groups/${groupid}/updateStudentGrades1/updateStudentGrades2/` + parseInt(d.value));
    }


    return (
        <div>
            <Header />
            <div id="getid" className="bg-light p-5 w-75 container-fluid mt-5"
                style={{ fontFamily: "cursive", fontSize: "1.2vw" }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student ID</h2>
                <form >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" placeholder="student's id"
                                id="input_id" style={{ fontSize: "1.2vw" }} required></input>
                        </div>
                    </div>
                    <a href='#' type="submit" class="btn btn-danger" onClick={getidfunc} id="search_link" >
                        Search
                    </a>
                </form>

            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{color: 'grey'}}></i>
            </a>
        </div>
    );



}