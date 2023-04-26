import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "../bootstrap/css/bootstrap.css";
import "./Group1";
import "./Group2";

var changeBtn1 = 0;
var changeBtn2 = 0;
var changeBtn3 = 0;
var changeBtn4 = 0;
export default function Selection() {


    const clickHandler1 = event => {
        if (changeBtn1 == 0)
         {
            event.currentTarget.className= "btn btn-info btn-lg"
            changeBtn1 = 1;

        }
        else 
        {
            event.currentTarget.className = "btn btn-primary btn-lg";
            changeBtn1 = 0;
        }
    };
    const clickHandler2 = event => {

        if (changeBtn2 == 0) 
        {
            event.currentTarget.className= "btn btn-info btn-lg"
            changeBtn2 = 1;
        }
        else 
        {
            event.currentTarget.className = "btn btn-danger  btn-lg";
            changeBtn2 = 0;
        }

    };
    const clickHandler3 = event => {

        if (changeBtn3 == 0) 
        {
            event.currentTarget.className= "btn btn-info btn-lg"
            changeBtn3 = 1;
        }
        else 
        {
            event.currentTarget.className = "btn btn-warning btn-lg";
            changeBtn3 = 0;
        }

    };
    const clickHandler4 = event => {

        if (changeBtn4 == 0) 
        {
            event.currentTarget.className= "btn btn-info btn-lg"
            changeBtn4 = 1;
        }
        else 
        {
            event.currentTarget.className = "btn btn-success btn-lg";
            changeBtn4 = 0;
        }

    };
    return (

        <div>
            <div className="container-sm m-3 p-3 bg-secondary"
            style={
                {borderRadius: "10px", fontFamily: "cursive", fontSize: "2vw",color:"#ffffff" }
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
            </div>
        </div>
    );

}





