import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './modules/Counter.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './modules/StudentList.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/studentlist" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
