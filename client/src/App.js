import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './component/UI/Navbar';
import Home from './component/modules/Home';
import Dashboard from './component/modules/Dashboard';
import Login from './component/modules/Login';

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dashboard/*' element={<Dashboard />}/>
          <Route path = '/Login' element={<Login />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
