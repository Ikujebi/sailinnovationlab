import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Guests from './components/Guests';
import "./App.css";
import "./index.css";
import AboutNav from './components/AboutNav';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/guest' element={<Guests/>} />
      <Route path='/aboutNav' element={<AboutNav/>} />
    </Routes>
  );
}

export default App;
