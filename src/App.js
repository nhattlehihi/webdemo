import React,{useState,useEffect} from 'react';
import { Route, Routes,Switch,BrowserRouter } from "react-router-dom";
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Menu from './pages/menu';
import Services from './pages/services';
import Shop from './pages/shop';

function App() {
const [isOpen,setIsOpen] = useState(false)

const toggle = () =>{
  setIsOpen(!isOpen)
}
console.log(isOpen)
  return ( <>
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/sevices" element={<Services/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
