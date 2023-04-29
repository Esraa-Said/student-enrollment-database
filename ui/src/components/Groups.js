import React, { useState, useEffect } from 'react';
import axios from "axios"
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import Options from './Options';
import './Groups.css';
import { getAllStudents, } from './Options';
import FunctionsOp from './FunctionsOp';
import { Await, json } from 'react-router-dom';

// determine the group 
const group = window.location.href;
group.split('/');
const groupid = group[group.length - 1];
console.log(groupid)
// create student
var dast = {};
async function createst(x) {
   const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/students`, x)
   console.log(data)

}
const submit = () => {

   let id = document.getElementById("id");
   let fn = document.getElementById("fn");
   let ln = document.getElementById("ln");
   let gn = document.getElementsByClassName("groupcheck");
   let em = document.getElementById("em");
   let pn = document.getElementById("pn");

   let x = 0;
   for (let i = 0; i < 4; i++) {
      if (gn[i].checked == true) {
         x = i + 1;
         break;
      }
   }

   dast["first_name"] = fn.value;
   dast["student_id"] = id.value;
   dast["last_name"] = ln.value;
   dast["group_id"] = x;
   dast["email"] = em.value;
   dast["phone_number"] = pn.value;

   createst(dast);
   console.log(dast)

}


export function createSt() {
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   gst.style.display = "none";
   getbtn.style.display = "none";
   del.style.display = "none";
   cr.style.display = "block";
}

////


// show all

export function gitAllBtn() {
   let getbtn = document.getElementById("getAll");
   let cr = document.getElementById("addSt");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   gst.style.display = "none";
   cr.style.display = "none";
   del.style.display = "none";
   getbtn.style.display = "block";
}



// delete student 

async function deletestudent(x) {
   const data = await axios.delete(`${process.env.REACT_APP_BASE_URL}/student/${x}`)
   console.log(data);
}

const deletest = () => {
   let id = document.getElementById("del_id");
   deletestudent(id.value)

}

export function delbtn() {
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   gst.style.display = "none";
   getbtn.style.display = "none";
   cr.style.display = "none";
   del.style.display = "block";

}

////

// get group students
export function onegroupstudentsbtn() {
   let cr = document.getElementById("addSt");
   let getbtn = document.getElementById("getAll");
   let del = document.getElementById("del_div");
   let gst = document.getElementById("getAllgroupstudent-div");
   del.style.display = "none";
   getbtn.style.display = "none";
   cr.style.display = "none";
   gst.style.display = "block";

}



export default function Groups() {

   //

   let get = 5
		const [data, setData] = useState([])
		useEffect(() => {
			axios
				.get(`${process.env.REACT_APP_BASE_URL}/students`)
				.then((res) => {
					setData(res.data)
				})
				.catch((err) => console.log(err))
		}, [])

		const [onegroupstudents, setonegroupstudents] = useState([])
		const [suject, setSubject] = useState([])
		useEffect(() => {
			axios
				.get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students`)

				.then((res) => {
					setonegroupstudents(res.data)
					setSubject(res.data["students_data"][0]["grades"])
				})
				.catch((err) => console.log(err))
		}, [])

		const show = data.data?.map((student, index) => {
			return (
				<tr key={index}>
					<td>{student.student_id}</td>
					<td>{student.first_name}</td>
					<td>{student.last_name}</td>
					<td>{student.group_id}</td>
					<td>{student.email}</td>
					<td>{student.phone_number}</td>
				</tr>
			)
		})

		const showgroupstudents = onegroupstudents["students_data"]?.map((student, index) => {
			return (
				<tr key={index}>
					<td>{student.student_id}</td>
					<td>{student.first_name}</td>
					<td>{student.last_name}</td>
					<td>{student.group_id}</td>
					<td>{student.email}</td>
					<td>{student.phone_number}</td>
					{student.grades.map((grade, index) => {
						return (
							<td>
								{grade.grade}
								<br></br>
								{grade.status}
							</td>
						)
					})}
				</tr>
			)
		})

		const displayOptions = () => {
			let op = document.getElementById("op")
			if (op.style.display == "block") {
				op.style.display = "none"
				document.getElementsByClassName("icon")[0].style.display = "block"
				document.getElementsByClassName("icon")[1].style.display = "none"
			} else {
				op.style.display = "block"
				document.getElementsByClassName("icon")[0].style.display = "none"
				document.getElementsByClassName("icon")[1].style.display = "block"
			}
		}

		return (
			<div>
				<Header />
				<div className="d-flex  justify-content-center  align-content-around  ">
					.
					{/* <div className='d-flex flex-wrap   align-content-around optionres align-self-start ' >
               <div className='icon align-self-center ml-5 ' style={{ width: "2vw", textAlign: "center", position: "fixed" }} >
                  <i class="fa-solid fa-arrows-turn-right " style={{ cursor: "pointer", fontSize: "2vw" }} onClick={displayOptions}></i>
               </div>

               <div id='op' style={{ display: "none", overflowY: "auto", height: "75vh", width: "270px", background: "red" }}>
                  <Options />
               </div>
               <div className='icon align-self-center ml-5 ' style={{ width: "2vw", textAlign: "center", position: "fixed", display: "none", zIndex: "2" }} >
                  <i class="fa-solid fa-xmark " style={{ cursor: "pointer", fontSize: "2vw", marginLeft: "200px" }} onClick={displayOptions}></i>
               </div>
            </div> */}
					<div className="bg-dark ml-5 mr-5 mt-3 options m-5  " style={{ width: "25vw", height: "75vh", borderRadius: "10px", overflowY: "auto" }}>
						<Options />
					</div>
					<div className=" ml-3 mt-5 mr-3 optionArea " style={{ width: "76vw", height: "75vh" }}>
						{/* start get All students */}

						<div
							className="get "
							id="getAll"
							style={{
								display: "none",
								overflowY: "auto",
								height: "75vh",
								fontFamily: "Arial",
								fontSize: "1vw",
								textAlign: "center",
							}}>
							<div className="table-responsive">
								<table class="table">
									<thead>
										<tr className="table-success">
											<th>student_id</th>
											<th>first_name</th>
											<th>last_name</th>
											<th>group_id</th>
											<th>email</th>
											<th>phone_number</th>
										</tr>
									</thead>
									<tbody>
										{show}
										{/* {JSON.stringify(data.data)}
										 */}
									</tbody>
								</table>
							</div>
						</div>

						{/* end get All students */}

						{/* start add student */}
						<div className="bg-light p-5" id="addSt" style={{ fontFamily: "cursive", fontSize: "1.2vw", display: "none" }}>
							<h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student Information</h2>
							<form onSubmit={submit}>
								<div className="form-group row mb-5">
									<label for="id" className="col-sm-3 col-form-label mr-2">
										Student Id
									</label>
									<div class="col-sm-7">
										<input type="text" class="form-control" placeholder="student's id" id="id" style={{ fontSize: "1.2vw" }} required></input>
									</div>
								</div>

								<div className="form-group row  mb-5">
									<label for="firstN" className="col-sm-3 col-form-label mr-2">
										Fisrt Name
									</label>
									<div class="col-sm-7">
										<input type="text" class="form-control" id="fn" placeholder="student's first name" style={{ fontSize: "1.2vw" }} required></input>
									</div>
								</div>

								<div className="form-group row  mb-5">
									<label for="lastN" className="col-sm-3 col-form-label mr-2">
										Last Name
									</label>
									<div class="col-sm-7">
										<input type="text" class="form-control" id="ln" style={{ fontSize: "1.2vw" }} placeholder="student's last name" required></input>
									</div>
								</div>

								<div className="form-group row  mb-5">
									<label for="email" className="col-sm-3 col-form-label mr-2">
										Email
									</label>
									<div class="col-sm-7">
										<input type="email" class="form-control" id="em" style={{ fontSize: "1.2vw" }} placeholder="student's email" required></input>
									</div>
								</div>

								<div className="form-group row  mb-5">
									<label for="phoneN" className="col-sm-3 col-form-label mr-2">
										Phone Number
									</label>
									<div class="col-sm-7">
										<input type="text" class="form-control" id="pn" style={{ fontSize: "1.2vw" }} placeholder="student's phone number" required></input>
									</div>
								</div>

								<div className="form-group row  mb-5">
									<label for="GroupN" className="col-sm-3 col-form-label mr-2">
										Group Number
									</label>
									<div className="col-sm-7">
										<input className="ml-2 groupcheck" type="radio" id="g1" style={{ fontSize: "1.2vw" }} name="group" required></input>
										<label class="mr-2 ml-2" for="g1">
											1
										</label>

										<input type="radio" className="ml-2 groupcheck" id="g2" style={{ fontSize: "1.2vw" }} name="group"></input>

										<label class=" ml-2 mr-2" for="g2">
											2
										</label>

										<input type="radio" className="ml-2 groupcheck" id="g3" style={{ fontSize: "1.2vw" }} name="group"></input>
										<label class="ml-2 mr-2" for="g3">
											3
										</label>

										<input type="radio" id="g4" className="ml-2 groupcheck" style={{ fontSize: "1.2vw" }} name="group"></input>

										<label class="mr-2 ml-2" for="g4">
											4
										</label>
									</div>
								</div>

								<button type="submit" class="btn btn-primary">
									Add
								</button>
							</form>
						</div>
						{/* end add student */}

						{/* start delete student */}

						<div className="bg-light p-5" id="del_div" style={{ fontFamily: "cursive", fontSize: "1.2vw", display: "none" }}>
							<h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student Information</h2>
							<form>
								<div className="form-group row mb-5">
									<label for="id" className="col-sm-3 col-form-label mr-2">
										Student Id
									</label>
									<div class="col-sm-7">
										<input type="text" class="form-control" placeholder="student's id" id="del_id" style={{ fontSize: "1.2vw" }} required></input>
									</div>
								</div>
								<button type="submit" class="btn btn-danger" onClick={deletest}>
									Delete
								</button>
							</form>
						</div>

						{/* end delete student */}

						{/* start update student */}

						{/* end update student */}

						{/* start show group students */}

						<div
							className="get "
							id="getAllgroupstudent-div"
							style={{
								overflow: "auto",
								height: "75vh",
								fontFamily: "Arial",
								fontSize: "1vw",
								textAlign: "center",
							}}>
							<div className="table-responsive">
								<table class="table">
									<thead>
										<tr className="table-success">
											<th>student_id</th>
											<th>first_name</th>
											<th>last_name</th>
											<th>group_id</th>
											<th>email</th>
											<th>phone_number</th>
											{suject.map((v, i) => {
												return <th>{v.subject_name}</th>
											})}
										</tr>
									</thead>
									<tbody>
										{showgroupstudents}
										{/* {JSON.stringify(data.data)}
										 */}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					{/* end show group students */}
				</div>
			</div>
		)
}