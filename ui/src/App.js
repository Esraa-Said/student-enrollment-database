import React from 'react';
import "./bootstrap/css/bootstrap.css";
import Selection from "./components/Selection";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from "./components/Main";
import Groups from './components/Groups';
import ShowStudent from './components/ShowStudent';
import ShowStudentInfoup from './components/ShowStudentInfoup';
import GetAllStudents from './components/GetAllStudents';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';
import UpdateStudentInfo from './components/UpdateStudentInfo';
import GetOneGroupStudents from './components/GetOneGroupStudents';
import ShowGroupSubjects from './components/ShowGroupSubjects';
import GetStudent from './components/GetStudent';
import GetInfoGroupStudents from './components/GetInfoGroupStudents';
import GroupStudentsGrades from './components/GroupStudentsGrades';

function App() {



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
                            <Route path="/select/:id/groups/:id/showStudent/:id" element={<ShowStudent />} />
                            <Route path="/select/:id/groups/:id/updateStudentInfo/:id" element={<ShowStudentInfoup />} />
                            <Route path='/select/:id/groups/:id/showAllStudents' element={<GetAllStudents/>} />
                            <Route path='/select/:id/groups/:id/addstudent' element = {<AddStudent/>}/>
                            <Route path='/select/:id/groups/:id/deletestudent' element = {<DeleteStudent/>}/>
                            <Route path='/select/:id/groups/:id/updateStudentInfo' element = {<UpdateStudentInfo/>}/>
                            <Route path='/select/:id/groups/:id/oneGroupStudents' element = {<GetOneGroupStudents/>}/>
                            <Route path='/select/:id/groups/:id/showGroupSubjects' element = {<ShowGroupSubjects/>}/>
                            <Route path='/select/:id/groups/:id/showStudent' element = {<GetStudent/>}/>
                            <Route path='/select/:id/groups/:id/showStudentsInfo' element = {<GetInfoGroupStudents/>}/>
                            <Route path='/select/:id/groups/:id/showStudentsgrades' element = {<GroupStudentsGrades/>}/>
                            {/* <Route path="/loginpass" element={<Loginpass />} /> */}
                        </Routes>
                    </switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;