import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import { group } from './Groups';
import Header from './Header';

export default function DeleteStudent() {
    // const [state, setState] = useState(true);
    let id = undefined;

    // useEffect(() => {
    //     const deleteHandler = async () => {
    //         try {
    //             console.log(id, "sss");
    //             await axios.delete(
    //                 `${process.env.REACT_APP_BASE_URL}/student/${id}`
    //             );
    //             setState(true);
    //             debugger;
    //         } catch (err) {
    //             setState(false);
    //         }
    //     };
    //     deleteHandler();
    // }, [id]);

    const deletest = async (event) => {
        event.preventDefault();
        const element = document.querySelector(".status");
        let input = document.getElementById("del_id").value;
        let ok = true;

        // validation    1 '1' '1xx' '' '**'
        if (typeof input === "string") {
            if (Number.isNaN(parseInt(input))) ok = false;
            else id = parseInt(input);
        } else id = input;

        if (!ok) {
            element.innerHTML = "Student ID is not valid";
            element.style.color = "red";
        } else {
            try {
                await axios.delete(
                    `${process.env.REACT_APP_BASE_URL}/student/${id}`
                );
                element.style.color = "green";
                element.innerHTML = "Deleted Successfully";
            } catch (err) {
                element.innerHTML = `No Student with ID = ${id}`;
                element.style.color = "red";
            }
        }
    };

    return (
        <div>
            <Header />
            <div
                className="container-fluid w-75 mt-5 p-5 bg-light"
                style={{
                    fontFamily: "cursive",
                    fontSize: "1.2vw",
                }}
            >
                <h2
                    style={{
                        fontSize: "2vw",
                        fontFamily: "cursive",
                        marginBottom: "50px",
                    }}
                >
                    Enter Student ID
                </h2>
                <form>
                    <div className="form-group row mb-5">
                        <label
                            for="id"
                            className="col-sm-3 col-form-label mr-2"
                        >
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="student's id"
                                id="del_id"
                                style={{ fontSize: "1.2vw" }}
                                required
                            ></input>
                        </div>
                        <div
                            class="col-sm-9 status"
                            style={{ color: "red", fontSize: "small" }}
                        ></div>
                    </div>
                    <a
                        href={group}
                        type="submit"
                        class="btn btn-danger"
                        id="btn"
                        onClick={deletest}
                    >
                        Delete
                    </a>
                </form>
            </div>
        </div>
    );
}