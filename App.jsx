import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Doctors from './pages/Doctors.jsx';
import WhyUs from './pages/WhyUs.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Helper component to scroll to top on route change
const ScrollToTopWrapper = () => {
    const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
