import {
  BrowserRouter, Routes,
  Route, Outlet, useNavigate
} from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
// import { useEffect, useState } from 'react';

import Loginpage from './pages/Loginpage.jsx';

const TokenChecker = () => {
  // const [result, setRoute] = useState();
  const navigate = useNavigate();
  // const token = loginActions.getToken();
  const token = false;
  return (
    <div>
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
      {token ? <Outlet /> : navigate('/login')}
      end
    </div>
  );
};

export default () => (
  <BrowserRouter>
    <div className="d-flex flex-column vh-100">
      <Routes>
        <Route element={<TokenChecker />}>
          <Route path="/" element={<div>chat page</div>} />
        </Route>
        <Route element={<TokenChecker />}>
          <Route path="/signup" element={<div>Sign up</div>} />
        </Route>
        <Route element={<TokenChecker />}>
          <Route path="/login" element={<Loginpage />} />
        </Route>
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
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
