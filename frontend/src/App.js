import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css'; // template css from this file

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {
  return (
    <>
<Router>
        <div className='App'>
          <Header />
          {/* the first route will be selected by default 
                          localhost:3000 is the dasjboard page 
                          localhost:3000/login is the login page  */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            {/* I belive you can do routes within routes to have pages that have routes within the page but im notm100% sure how to do it */}

          </Routes>

        </div>
      </Router>
      {/* to allow toastifytpop ups to work anywhere */}
      <ToastContainer /> 

            {/* redux template stuff added automatically */}
            {/* uses App.css */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            >
            React Redux 
          </a>
        </span>
      </header>
    </div>
    </>
  );
}

export default App;
