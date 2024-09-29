import {
  BrowserRouter, Routes,
  Route, Outlet,
  Navigate
} from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
// import { useEffect, useState } from 'react';

import Loginpage from './pages/Loginpage.jsx';
import Chatpage from './pages/Chatpage.jsx';
import { getToken } from './services/localStorage';

const TokenChecker = () => {
  const token = getToken();
  // const token = false;
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default () => (
  <BrowserRouter>
    <div className="d-flex flex-column vh-100">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Moy Chat</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:
              <a href="#login">User</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      result:
      <Routes>
        <Route path="/" element={<TokenChecker />}>
          <Route index element={<Chatpage />} />
        </Route>
        <Route path="/signup" element={<div>Sign up</div>} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
      end
    </div>
  </BrowserRouter>
);

// useEffect(() => {
//   const token = JSON.parse(localStorage.getItem('token'));
//   const route = token ? <Outlet/> : navigate("/login");
//   // const route = <Outlet/>;
//   setRoute(route);
// }, [navigate]);
// return (
//   <div>
//     result: {result} end
//   </div>
// )
