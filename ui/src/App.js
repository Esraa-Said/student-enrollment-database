import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap/css/bootstrap.css"
import Header from "./components/Header";
import Selection from "./components/Selection";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Main from "./components/Main";
import Groups from './components/Groups';
import AddStudent from './components/AddStudent';
import ShowStudent from './components/ShowStudent';
import ShowStudentInfoup from './components/ShowStudentInfoup';

function App() {

  // console.log(process.env, process.env.REACT_APP_BASE_URL)
	// const [backendData, setBackendData] = useState([{}])
	// useEffect(() => {
	// 	axios.get(`${process.env.REACT_APP_BASE_URL}/students`).then((data) => {
	// 		// console.log(data.data)
	// 		setBackendData(data.data)
	// 		// debugger
	// 	})
	// }, [])
	// // let history = useHistory()
	// // console.log(history)

  return (
// 	<div>{JSON.stringify(backendData)}</div>
    <BrowserRouter>
      <div>
        <main>

          <switch>
            <Routes>
              <Route path="" element={<Main />} />
              <Route path="/select/:id" element={<Selection />} />

            
              <Route path="/select/:id/groups/:id" element={<Groups />} />
              <Route path="/select/:id/groups/:id/:id" element={<ShowStudent />} />
              <Route path="/select/:id/groups/:id/update/:id" element={<ShowStudentInfoup />} />

              {/* <Route path="/loginpass" element={<Loginpass />} /> */}

            </Routes>
          </switch>

        </main>

      </div>
    </BrowserRouter>







  );

}

export default App;