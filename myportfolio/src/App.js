import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import "./App.css";
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import ContactForm from './Pages/Contact';
import Resume from './Pages/Resume';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="contact" element={<ContactForm/>} />
      <Route path="resume" element={<Resume/>} />
     </Routes>
     </BrowserRouter>
          <Footer />
       
    </div>
  );
}

export default App;
