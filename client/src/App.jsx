// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Aboutt from './components/aboutt.jsx';
import ImageUpload from './components/ImageUpload.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/" element={<Landing />} />
        <Route path="/aboutt" element={<Aboutt />} />
        <Route path="/imageupload" element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
