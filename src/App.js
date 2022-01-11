import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Breeds from './pages/Breeds.js';
import Trending from './pages/Trending.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/breeds/:name" element={<Breeds />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
