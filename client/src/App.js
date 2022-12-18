import './App.css';
import AdmissionForm from "./AdmissionForm.js";
import Payment from "./Payment.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<AdmissionForm />} />
    <Route path='/payment' element={<Payment />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
