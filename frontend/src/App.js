import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Homesection from './Components/Home/Homesection';
import SlotBooking from './Components/Home/SlotBooking';
import ARegister from './Components/Home/ARegister';
import Blogs1 from './Components/Home/Blogs1';
import TermsPolicy from './Components/Home/TermsPolicy';
import LearnMorePage from './Components/Home/LearnMorePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/mnrealty" element={<Homesection />} />
          <Route path="/slotbooking" element={<SlotBooking />} />
          <Route path="/agent" element={<ARegister />} />
          <Route path="/blogs" element={<Blogs1 />} />
          <Route path="/policy" element={<TermsPolicy />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
