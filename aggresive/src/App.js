import Create from './components/Create';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/Read';
import Update from './components/Update'
import './App.css';

function App() {
  return (
    <div className='container'> 
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
