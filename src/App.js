import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Signup />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
