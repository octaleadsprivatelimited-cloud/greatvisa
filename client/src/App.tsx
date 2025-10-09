import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
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
import UKVisitorVisaConsultants from './pages/UKVisitorVisaConsultants';
import UKHealthcareProfessionalsWorkVisa from './pages/UKHealthcareProfessionalsWorkVisa';
import UKITProfessionalsVisaConsultancy from './pages/UKITProfessionalsVisaConsultancy';
import StudentVisaConsultantsHyderabad from './pages/StudentVisaConsultantsHyderabad';
import UKSkilledWorkerVisaConsultantsHyderabad from './pages/UKSkilledWorkerVisaConsultantsHyderabad';
import IrelandITProfessionalWorkVisaConsultancy from './pages/IrelandITProfessionalWorkVisaConsultancy';
import IrelandHealthcareWorkVisaConsultancy from './pages/IrelandHealthcareWorkVisaConsultancy';
import Tier2WorkVisaUK from './pages/Tier2WorkVisaUK';
import NetherlandsSkilledWorkerVisa from './pages/NetherlandsSkilledWorkerVisa';
import UKHealthcareWorkerVisaConsultants from './pages/UKHealthcareWorkerVisaConsultants';
import UKTier2VisaConsultantsHyderabad from './pages/UKTier2VisaConsultantsHyderabad';
import UKSkilledWorkVisaConsultancy from './pages/UKSkilledWorkVisaConsultancy';
import SkilledMigration from './pages/SkilledMigration';
import AlbaniaWorkVisa from './pages/AlbaniaWorkVisa';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            
            {/* New Specialized Service Pages */}
            <Route path="/uk-visitor-visa-consultants" element={<UKVisitorVisaConsultants />} />
            <Route path="/uk-health-care-professionals-work-visa" element={<UKHealthcareProfessionalsWorkVisa />} />
            <Route path="/uk-it-professionals-visa-consultancy" element={<UKITProfessionalsVisaConsultancy />} />
            <Route path="/student-visa-consultants-in-hyderabad" element={<StudentVisaConsultantsHyderabad />} />
            <Route path="/uk-skilled-worker-visa-consultants-in-hyderabad" element={<UKSkilledWorkerVisaConsultantsHyderabad />} />
            <Route path="/best-ireland-it-professional-work-visa-consultancy" element={<IrelandITProfessionalWorkVisaConsultancy />} />
            <Route path="/best-ireland-health-care-work-visa-consultancy" element={<IrelandHealthcareWorkVisaConsultancy />} />
            <Route path="/tier-2-work-visa-for-uk" element={<Tier2WorkVisaUK />} />
            <Route path="/netherlands-skilled-worker-visa" element={<NetherlandsSkilledWorkerVisa />} />
            <Route path="/uk-healthcare-worker-visa-consultants" element={<UKHealthcareWorkerVisaConsultants />} />
            <Route path="/uk-tier-2-visa-consultants-in-hyderabad" element={<UKTier2VisaConsultantsHyderabad />} />
            <Route path="/uk-skilled-work-visa-consultancy" element={<UKSkilledWorkVisaConsultancy />} />
            <Route path="/skilled-migration" element={<SkilledMigration />} />
            <Route path="/albania-work-visa" element={<AlbaniaWorkVisa />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;