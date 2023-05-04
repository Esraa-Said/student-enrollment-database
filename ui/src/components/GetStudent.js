
import React from 'react';
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import { getAllStudents, } from './Options';
import FunctionsOp from './FunctionsOp';
import { Await, json } from 'react-router-dom';
import GetAllStudents from './GetAllStudents';
import GetInfoGroupStudents from './GetInfoGroupStudents';
import GetOneGroupStudents from './GetOneGroupStudents';
import { group, groupid } from './Groups';
import { Link } from 'react-router-dom';


export default function GetStudent() {

    function idfun() {
        let studentinput = document.getElementById("search_id");
        let link = document.getElementById("search");
        link.setAttribute("href", group + '/' + parseInt(studentinput.value));
    }

    return (
        <div>
            <div className="bg-light p-5 w-100" id="search_div"
                style={{ fontFamily: "cursive", fontSize: "1.2vw", position: "absolute" }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student ID</h2>
                <form >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" placeholder="student's id" id="search_id" style={{ fontSize: "1.2vw" }} required></input>
                        </div>
                    </div>
                    <a href='#' type="submit" class="btn btn-danger" onClick={idfun} id="search">
                        Search
                    </a>
                </form>
            </div>
        </div >
    );
}


