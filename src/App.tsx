import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Guests from './components/Guests';
import "./App.css";
import "./index.css";
import AboutNav from './components/AboutNav';
import OurProgramsNav from './components/OurProgramsNav';
import BlogNav from './components/BlogNav';
import IndividualBlog1 from './components/IndividualBlog';
import IndividualBlog2 from './components/individualBlog2'
import Facility from './components/Facility';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/guest' element={<Guests/>} />
      <Route path='/aboutNav' element={<AboutNav/>} />
      <Route path='/programNav' element={<OurProgramsNav/>} />
      <Route path='/blognav' element={<BlogNav/>} />
      <Route path='/individualBlog' element={<IndividualBlog1/>} />
      <Route path='/individualBlog2' element={<IndividualBlog2/>} />
      <Route path='/facility' element={<Facility/>} />

    </Routes>
  );
}

export default App;
