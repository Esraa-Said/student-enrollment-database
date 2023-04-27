import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap/css/bootstrap.css"
import Header from "./components/Header";
import Selection from "./components/Selection";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Group1 from './components/Group1';
import Group2 from './components/Group2';
import Main from "./components/Main";
import Groups from './components/Groups';

function App() {

  return (

    <BrowserRouter>
      <div>
        <main>

          <switch>
            <Routes>
              <Route path="" element={<Main />} />
              <Route path="/select" element={<Selection whereprop={5}/>} />

              <Route path="/Group1" element={<Group1 />} />
              <Route path="/Group2" element={<Group2 />} />
              <Route path="/groups" element={<Groups />} />
              {/* <Route path="/loginpass" element={<Loginpass />} /> */}

            </Routes>
          </switch>

        </main>

      </div>
    </BrowserRouter>







  );

}

export default App;