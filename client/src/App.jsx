import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
