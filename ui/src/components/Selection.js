import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "../bootstrap/css/bootstrap.css";
import "./Group1";
import "./Group2";
//import {where} from "./Main";


export let listbtns = [0, 0, 0, 0];

export default function Selection() {

    

    const clickHandler1 = event => {
        if (listbtns[0] == 0) {
            event.currentTarget.className = "btn btn-info btn-lg"
            listbtns[0] = 1;

        }
        else {
            event.currentTarget.className = "btn btn-primary btn-lg";
            listbtns[0] = 0;
        }
    };
    const clickHandler2 = event => {

        if (listbtns[1] == 0) {
            event.currentTarget.className = "btn btn-info btn-lg"
            listbtns[1] = 1;
        }
        else {
            event.currentTarget.className = "btn btn-danger  btn-lg";
            listbtns[1] = 0;
        }

    };
    const clickHandler3 = event => {

        if (listbtns[2] == 0) {
            event.currentTarget.className = "btn btn-info btn-lg"
            listbtns[2] = 1;
        }
        else {
            event.currentTarget.className = "btn btn-warning btn-lg";
            listbtns[2] = 0;
        }

    };
    const clickHandler4 = event => {

        if (listbtns[3] == 0) {
            event.currentTarget.className = "btn btn-info btn-lg"
            listbtns[3] = 1;
        }
        else {
            event.currentTarget.className = "btn btn-success btn-lg";
            listbtns[3] = 0;
        }

    };


    const go = () => {
       
        let btngo = document.getElementById("btngo");
        btngo.setAttribute("href", "select");
        let count = 0;
     
        for (var i = 0; i < listbtns.length; ++i) {
            if (listbtns[i] == 1)
                count++;
        }
        if (count == 0) {
            alert("you should choose at least one group")
            btngo.setAttribute("href", "select");
        }
        else {
            // console.log(val);
            // if (val == 0) {
            //     btngo.setAttribute("href", "groups");
            // }
            // else {
            //     if (count > 1) {
            //         alert("you should choose at most one group")
            //         btngo.setAttribute("href", "select");
            //     }
            //     else
            //     {
            //         btngo.setAttribute("href", "groups");
            //     }
            // }
          
            
        }


    }
    return (

        <div>
            <div className="container-sm m-3 p-3 bg-secondary"
                style={
                    { borderRadius: "10px", fontFamily: "cursive", fontSize: "2vw", color: "#ffffff" }
                }
            >
                <span>ESK for Student Enrollment</span>
            </div>
            <div className='container mt-5'>
                <div className="d-flex flex-wrap justify-content-around align-items-center align-content-around ">
                    <div className="align-self-center  " data-aos="fade-down-right">
                        {/*  group1  */}
                        <a className="btn btn-primary  btn-lg" role="button" onClick={
                            clickHandler1

                        }
                            style={
                                {
                                    height: "15vw", width: "250px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
                                }
                            }>

                            Group1
                        </a>


                    </div>
                    {/* group 2 */}
                    <div className="  align-self-center" data-aos="fade-down-left">
                        {/*  group1  */}
                        <a className="btn btn-danger btn-lg" role="button" onClick={
                            clickHandler2

                        }
                            style={
                                {
                                    height: "15vw", width: "250px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
                                }
                            }>
                            Group2
                        </a>

                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-around align-items-center align-content-around">
                    {/* group 3 */}
                    <div className="  align-self-center " data-aos="fade-up-right" >
                        {/*  group1  */}
                        <a className="btn btn-warning btn-lg" role="button" onClick={
                            clickHandler3

                        }
                            style={
                                {
                                    height: "15vw", width: "250px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
                                }
                            }>
                            Group3
                        </a>


                    </div>
                    {/* group4 */}
                    <div className="  align-self-center " data-aos="fade-up-left">

                        <a className="btn btn-success btn-lg " role="button" onClick={
                            clickHandler4

                        }
                            style={
                                {
                                    height: "15vw", width: "250px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
                                }
                            }>
                            Group4
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-around align-items-center align-content-around">
                    <div className='align-self-center ' >
                        <a href='select' role='button' className='btn btn-secondary btn-lg' style={{ padding: "1vw", fontSize: "2vw" }} id="btngo" onClick={go}>GO</a>
                    </div>
                </div>
            </div>
        </div>
    );

}





