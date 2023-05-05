import React from 'react';
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import './Options.css';

// determine the group 
export const group = window.location.href;

let temp = group.split('/');
export const groupid = temp[6];
export const id = temp[4];



export default function Groups() {


    return (
        <div>
            <Header />
            {/* 
            <div className='container'>
            <img src={uni} style={{width:"50vw"}} />
            </div> */}
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{color: 'grey'}}></i>
            </a>
        </div>
    );
}

