import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Estimator } from './pages/Estimator';
import { Contact } from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Cookie Consent Component
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          We use cookies to analyze traffic and improve your experience. By continuing, you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button onClick={accept} className="text-sm text-zinc-500 hover:text-zinc-900">Decline</button>
          <button onClick={accept} className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded hover:bg-zinc-800">Accept All</button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-brand-500/30">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estimate" element={<Estimator />} />
            <Route path="/contacts" element={<Contact />} />
            {/* Fallback routes for demo structure */}
            <Route path="/services/*" element={<div className="pt-32 text-center text-zinc-500">Service Page Template</div>} />
            <Route path="/solutions/*" element={<div className="pt-32 text-center text-zinc-500">Solution Page Template</div>} />
            <Route path="/industries/*" element={<div className="pt-32 text-center text-zinc-500">Industry Page Template</div>} />
            <Route path="/company" element={<div className="pt-32 text-center text-zinc-500">About Us Page</div>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;