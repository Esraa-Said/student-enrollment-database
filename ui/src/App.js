import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./bootstrap/css/bootstrap.css"
import Header from "./components/Header";
import Selection from "./components/Selection";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
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
              <Route path="/select/:id" element={<Selection />} />

            
              <Route path="/select/:id/groups/:id" element={<Groups />} />
              {/* <Route path="/loginpass" element={<Loginpass />} /> */}

            </Routes>
          </switch>

        </main>

      </div>
    </BrowserRouter>







  );

}

export default App;