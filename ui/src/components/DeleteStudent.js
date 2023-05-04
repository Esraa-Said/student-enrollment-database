
import React from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import './Groups.css';
import { group } from './Groups';
export default function DeleteStudent() {

    async function deletestudent(x, event) {
        const data = await axios.delete(`${process.env.REACT_APP_BASE_URL}/student/${x}`);
        console.log(data);
        // let btn = document.getElementById("btn");
    }

    const deletest = (event) => {
        //event.preventDefault();
        let id = document.getElementById("del_id");
        deletestudent(id.value);
        alert("deleted");
    };

    return (
        <div>
            <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student ID</h2>
            <form>
                <div className="form-group row mb-5">
                    <label for="id" className="col-sm-3 col-form-label mr-2">
                        Student ID
                    </label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" placeholder="student's id" id="del_id" style={{ fontSize: "1.2vw" }} required></input>
                    </div>
                </div>
                <a href={group} type="submit" class="btn btn-danger" id="btn" onClick={deletest}>
                    Delete
                </a>
            </form>
        </div>
    );
}