import React from 'react';
import "../bootstrap/css/bootstrap.css";


{/* start get All students */ }
export function gitAllBtn() {
    let getbtn = document.getElementById("getAll");
    getbtn.style.display = "block";
}
export function getAllstudents(props) {
    <div
        className="get w-100 "
        id="getAll"
        style={{
            display: "none",
            overflowY: "auto",
            height: "75vh",
            fontFamily: "Arial",
            fontSize: "1vw",
            textAlign: "center",
            position: "absolute"
        }}>
        <div className="table-responsive">
            <table class="table">
                <thead>
                    <tr className="table-success">
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props}
                    {/* {JSON.stringify(data.data)}*/}
                </tbody>
            </table>
        </div>
    </div>;
}
{/* end get All students */ }