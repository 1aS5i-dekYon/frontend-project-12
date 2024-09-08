import { BrowserRouter, Routes, Route, Outlet, Navigate, } from 'react-router-dom';
import { Loginpage } from './pages/Loginpage.jsx';
// import { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';

function TokenChecker({ children }) {
  // const [result, setRoute] = useState();
  // const navigate = useNavigate();
  // const token = JSON.parse(localStorage.getItem('token'));
  const token = true;
  if (token) {
    return (
      <div>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Moy Chat</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">User</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        result:{<Outlet />}end
      </div>
    )
  }
  return <Navigate to='/login'/>;
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
}

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
      <Routes>
        <Route path="/" element={<TokenChecker />}>
          <Route path="signup" element={<Loginpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route index element={<div>chat page</div>} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Route>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
