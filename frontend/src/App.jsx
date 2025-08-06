import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Create from "./pages/Create"
import NoteDetails from "./pages/NoteDetails";
import toast from "react-hot-toast";
import './index.css'


const App = () => {
  return (
    <div className="relative h-screen w-screen bg-[#000000] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-10"></div>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 
          w-[600px] h-[600px] rounded-full
          bg-[radial-gradient(circle_farthest-side,rgba(128,90,213,0.3),rgba(0,0,0,0))]"
        style={{ bottom: '-300px' }}>
     </div>
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note/:id" element={<NoteDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
