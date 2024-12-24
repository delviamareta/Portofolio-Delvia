import Nav from "./components/nav";
import Home from "./pages/home";
import Projects from "./pages/projects"
import Aboutme from "./pages/aboutme";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
};


export default App;
