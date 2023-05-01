import React, { useState, useEffect } from 'react';
import "../bootstrap/css/bootstrap.css";
import axios from 'axios';
export const getAllStudents = function () {
    console.log("hh")
    return (
        <div>
            sssmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
        </div>
    )
}

export default function FunctionsOP(props) {

    return (
        <div className='get'>
            <div>kjk</div>
            <table>
                <thead>
                    <tr>
                        <th>student_id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>group_id</th>
                        <th>email</th>
                        <th>phone_number</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                        <td>{props.student_id}</td>
                        <td>{props.first_name}</td>
                        <td>{props.last_name}</td>
                        <td>{props.group_id}</td>
                        <td>{props.email}</td>
                        <td>{props.phone_number}</td>

                    </tr>
                    {/* {JSON.stringify(data.data)}
              */}
                </tbody>
            </table>
        </div>
    )
}