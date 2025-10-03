import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
// Removed legacy routes
import Contact from './pages/Contact';
// Removed legacy routes
import FAQ from './pages/FAQ';
// Removed legacy routes
import StudyVisa from './pages/StudyVisa';
import WorkVisa from './pages/WorkVisa';
import TouristVisa from './pages/TouristVisa';
import FamilyVisa from './pages/FamilyVisa';
import BusinessVisa from './pages/BusinessVisa';
import ImmigrationConsultation from './pages/ImmigrationConsultation';
import JobPlacement from './pages/JobPlacement';
import SkillAssessment from './pages/SkillAssessment';
import DocumentAttestation from './pages/DocumentAttestation';
import VisaExtension from './pages/VisaExtension';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            
            <Route path="/study-visa" element={<StudyVisa />} />
            <Route path="/work-visa" element={<WorkVisa />} />
            <Route path="/tourist-visa" element={<TouristVisa />} />
            <Route path="/family-visa" element={<FamilyVisa />} />
            <Route path="/business-visa" element={<BusinessVisa />} />
            <Route path="/immigration-consultation" element={<ImmigrationConsultation />} />
            <Route path="/job-placement" element={<JobPlacement />} />
            <Route path="/skill-assessment" element={<SkillAssessment />} />
            <Route path="/document-attestation" element={<DocumentAttestation />} />
            <Route path="/visa-extension" element={<VisaExtension />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;