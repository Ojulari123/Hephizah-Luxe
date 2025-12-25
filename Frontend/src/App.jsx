import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import BeforeAfter from './pages/BeforeAfter';
import Inquiries from './pages/Inquiries';
import ClientPortal from './pages/ClientPortal';
import SingleDayEventDetails from './pages/SingleDayEventDetails';
import MultiDayEventDetails from './pages/MultiDayEventDetails';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/single-day/:eventId" element={<SingleDayEventDetails />} />
            <Route path="/portfolio/multi-day/:eventId" element={<MultiDayEventDetails />} />
            <Route path="/before-after" element={<BeforeAfter />} />
            <Route path="/inquiries" element={<Inquiries />} />
            <Route path="/client-portal" element={<ClientPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;