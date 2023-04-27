import React, { Component, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import "./bootstrap/css/bootstrap.css"
import Header from "./components/Header"
import Selection from "./components/Selection"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import Group1 from "./components/Group1"
import Group2 from "./components/Group2"
import Main from "./components/Main"
import axios from "axios"
// import { useHistory } from "react-router-dom"
function App() {
	console.log(process.env, process.env.REACT_APP_BASE_URL)
	const [backendData, setBackendData] = useState([{}])
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_BASE_URL}/students`).then((data) => {
			// console.log(data.data)
			setBackendData(data.data)
			// debugger
		})
	}, [])
	// let history = useHistory()
	// console.log(history)
	return (
	// 	<div>{JSON.stringify(backendData)}</div>
		<BrowserRouter>
			<div>
				<main>
					<switch>
						<Routes>
							<Route path="" element={<Main />} />
							<Route path="/select" element={<Selection />} />

							<Route path="/Group1" element={<Group1 />} />
							<Route path="/Group2" element={<Group2 />} />

							{/* <Route path="/loginpass" element={<Loginpass />} /> */}
						</Routes>
					</switch>
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App
