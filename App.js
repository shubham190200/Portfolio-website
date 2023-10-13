import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes'
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Use the 'Routes' component to define your routes */}
          <Route path="/" element={<Home />} /> {/* Use 'element' to specify the component */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
