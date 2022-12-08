import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './component/UI/Navbar';
import Home from './component/modules/Home';
import Dashboard from './component/modules/Dashboard';
import ListEmployee from './component/modules/ListEmployee';
import Notification from './component/modules/Notification';
import Inforpage from './component/modules/InforPage';
import Login from './component/modules/Login';
import Register from './component/modules/Register';

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dashboard/*' element={<Dashboard />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
