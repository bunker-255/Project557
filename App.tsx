import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServiceDetail } from './pages/ServiceDetail';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Retreats } from './pages/Retreats';
import { RetreatDetail } from './pages/RetreatDetail';
import { Services } from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="retreats" element={<Retreats />} />
          <Route path="retreat/:slug" element={<RetreatDetail />} />
          <Route path="service/:slug" element={<ServiceDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;