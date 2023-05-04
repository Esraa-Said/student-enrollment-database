import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import axios from 'axios';


let id = '0';
let listbtns = [0, 0, 0, 0];
let groupId = '0';
export default function Selection() {

    let lo = window.location.href;
    lo.split('/');
    id = lo[lo.length - 1];

    const clickHandler1 = event => {
        
        groupId = '1';
        let g = document.getElementById("group1")
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);
    };
    const clickHandler2 = event => {

      
        groupId = '2';
        let g = document.getElementById("group2")
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);

    };
    const clickHandler3 = event => {

       
        groupId = '3';
        let g = document.getElementById("group3")
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);

    };
    const clickHandler4 = event => {

       
        groupId = '4';
        let g = document.getElementById("group4")
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);
    };


    return (

        <div>
           <Header/>
            <div className='container mt-5'>
                <div className="d-flex flex-wrap justify-content-around align-items-center align-content-around ">
                    <div className="align-self-center  " data-aos="fade-down-right">
                        {/*  group1  */}
                        <a className="btn btn-primary  btn-lg"  role="button" href='#' id="group1" onClick={
                            clickHandler1

                        }
                            style={
                                {
                                    height: "15vw", width: "300px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
                                }
                            }>

                            Group1
                        </a>


                    </div>
                    {/* group 2 */}
                    <div className="  align-self-center" data-aos="fade-down-left">
                        {/*  group1  */}
                        <a className="btn btn-danger btn-lg" role="button" href='#' id="group2" onClick={
                            clickHandler2

                        }
                            style={
                                {
                                    height: "15vw", width: "300px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
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
                        <a className="btn btn-warning btn-lg" role="button" href='#' id="group3" onClick={
                            clickHandler3

                        }
                            style={
                                {
                                    height: "15vw", width: "300px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
                                }
                            }>
                            Group3
                        </a>


                    </div>
                    {/* group4 */}
                    <div className="  align-self-center " data-aos="fade-up-left">

                        <a className="btn btn-success btn-lg " role="button" href='#' id="group4" onClick={
                            clickHandler4

                        }
                            style={
                                {
                                    height: "15vw", width: "300px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "3vw"
                                }
                            }>
                            Group4
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );

}





