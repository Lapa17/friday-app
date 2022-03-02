import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Profile } from './Pages/Profile';
import { Login } from './Pages/Login';
import { Error404 } from './Pages/404';
import { NewPassword } from './Pages/NewPassword';
import { PasswordRestore } from './Pages/PasswordRestore';
import { Register } from './Pages/Register';
import { TestPage } from './Pages/Test';

function App() {
  return (
    <div className="App">
      <nav className='menu'>
        <NavLink to='/friday-app'>Main</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/login'> Login</NavLink>
        <NavLink to='/register' >Register</NavLink>
        <NavLink to='/404' >Error404</NavLink>
        <NavLink to='/new-password' >NewPassword</NavLink>
        <NavLink to='/password-restore' >PasswordRestore</NavLink>
        <NavLink to='/test' >TestPage</NavLink>
      </nav>

      <Routes>
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='404' element={<Error404 />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="password-restore" element={<PasswordRestore />} />
        <Route path='/' element={<App />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
