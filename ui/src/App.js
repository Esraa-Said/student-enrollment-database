import React, { Component } from "react"
import ReactDOM from "react-dom/client"
import "./bootstrap/css/bootstrap.css"
import Header from "./components/Header"
import Selection from "./components/Selection"
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import Group1 from "./components/Group1"
import Group2 from "./components/Group2"
import Main from "./components/Main"

function App() {
	return (
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
