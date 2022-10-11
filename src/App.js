import { BrowserRouter, Routes, Route } from "react-router-dom";
import Updates from "./components/updates";
import Contact from './components/Contact/Contact'
import Datac from './components/Data/Datac'
import Plans from './components/Plans/Plans'
import Industry from './components/Industry/Industry'
import Solutions from './components/Home/Solutions';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Updates></Updates>
    <Navbar></Navbar>
      <Routes>
        <Route path="/Solutions" element={<Solutions></Solutions>} />
        <Route path="/Industry" element={<Industry></Industry>} />
        <Route path="/Plans" element={<Plans></Plans>} />
        <Route path="/Datac" element={<Datac></Datac>} />
        <Route path="/Contact" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter> 
    
    </>
  );
}

export default App;
