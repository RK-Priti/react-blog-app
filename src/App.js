import './App.css';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Signup from './components/Signup';
import { useState } from 'react';
import Addblog from './components/Addblog';
import Profile from './components/Profile';

function App() {
  const [loggedin, setloggedin] = useState(window.sessionStorage.getItem('email') ? window.sessionStorage.getItem('email') : false)
  return (
    <div className='html-body'>
      <Router>
        <Navbar loggedin={loggedin} />
        <Routes>
          <Route path='/login' element={<Login setloggedin={setloggedin} />} />
          <Route path='/signup' element={<Signup setloggedin={setloggedin} />} />
          <Route path='/' element={<Blogs />} />
          <Route path='/users' element={<Users />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/addblog' element={<Addblog />} />
          <Route path='/user/:email' element={<Blogs />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
