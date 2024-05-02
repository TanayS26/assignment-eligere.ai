import './App.css';
import "./sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Confirmation from "./Confirmation"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
