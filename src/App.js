import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopStore from './apps/ShopStore';
import Login from './apps/Login';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (<BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<ShopStore />} />
      </Routes>
    </div>
  </BrowserRouter>);
}

export default App;
