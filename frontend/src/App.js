import logo from './logo.svg';
import './App.css'; // for global CSS

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
    </>
  );
}

export default App;


/**
 * original default app.js return value
 * 
  return (
    <div className="App">
      <header className="App-header">  // usaes css classes 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

 
 */