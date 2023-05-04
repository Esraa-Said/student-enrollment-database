import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import { getAllStudents, } from './Options';
import FunctionsOp from './FunctionsOp';
import { Await, json } from 'react-router-dom';
import GetAllStudents from './GetAllStudents';
import GetInfoGroupStudents from './GetInfoGroupStudents';
import GetOneGroupStudents from './GetOneGroupStudents';
import { groupid } from './Groups';
import { group } from './Groups';

export default function UpdateStudent() {

    function getidfunc() {
        let d = document.getElementById("input_id");
        console.log(d.value);

        let link = document.getElementById("search_link");
        link.setAttribute("href", group + '/update/' + parseInt(d.value));
    }

    return (
        <div>
            <div id="getid" className="bg-light p-5 w-100"
                style={{ fontFamily: "cursive", fontSize: "1.2vw", position: "absolute" }}>
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
        </div>
    );
}