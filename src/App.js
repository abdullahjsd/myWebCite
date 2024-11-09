import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Projects from './pages/project/projects';
import Contact from './pages/contact/contact';
import NoPage from './pages/nopage/NoPage';
import Header from './components/Header';
import Foother from './components/foother'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Foother />
      </BrowserRouter>
    </div>
  );
}

export default App;
