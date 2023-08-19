import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Software from './components/Software';
import Art from './components/Art';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>     
        <Route path="/art" element={<Art />}/>
        <Route path="/software" element={<Software />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
