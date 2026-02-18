import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurImpact from './pages/OurImpact';
import HowMcDonaldsHelps from './pages/HowMcDonaldsHelps';
import BoardOfDirectors from './pages/BoardOfDirectors';
import LeadershipTeam from './pages/LeadershipTeam';
import JoinOurTeam from './pages/JoinOurTeam';
import StayingWithUs from './pages/StayingWithUs';
import RequestARoom from './pages/RequestARoom';
import FamilySupportServices from './pages/FamilySupportServices';
import SupportAFamily from './pages/SupportAFamily';
import Volunteer from './pages/Volunteer';
import Events from './pages/Events';
import WaysToGive from './pages/WaysToGive';
import Camp from './pages/Camp';
import CampDonate from './pages/CampDonate';
import FamilyCamp from './pages/FamilyCamp';
import VolunteerCounselor from './pages/VolunteerCounselor';
import Donate from './pages/Donate';
import Superstars from './pages/Superstars';
import ServedWithLove from './pages/ServedWithLove';
import WishList from './pages/WishList';
import Shop from './pages/Shop';
import Enews from './pages/Enews';
import GuestFeeDonation from './pages/GuestFeeDonation';
import Contact from './pages/Contact';
import TaxInformation from './pages/TaxInformation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Read from './pages/Read';
import PlanePull from './pages/PlanePull';
import HitEm from './pages/HitEm';
import Champions from './pages/Champions';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="about-us/our-impact" element={<OurImpact />} />
        <Route path="about-us/how-mcdonalds-helps" element={<HowMcDonaldsHelps />} />
        <Route path="about-us/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="about-us/leadership-team" element={<LeadershipTeam />} />
        <Route path="about-us/join-our-team" element={<JoinOurTeam />} />
        <Route path="staying-with-us" element={<StayingWithUs />} />
        <Route path="staying-with-us/request-a-room" element={<RequestARoom />} />
        <Route path="staying-with-us/family-support-services" element={<FamilySupportServices />} />
        <Route path="staying-with-us/support-a-family" element={<SupportAFamily />} />
        <Route path="get-involved/volunteer" element={<Volunteer />} />
        <Route path="get-involved/events" element={<Events />} />
        <Route path="get-involved/ways-to-give" element={<WaysToGive />} />
        <Route path="camp" element={<Camp />} />
        <Route path="camp/donate" element={<CampDonate />} />
        <Route path="camp/family-camp" element={<FamilyCamp />} />
        <Route path="camp/volunteer-counselor" element={<VolunteerCounselor />} />
        <Route path="donate" element={<Donate />} />
        <Route path="superstars" element={<Superstars />} />
        <Route path="servedwithlove" element={<ServedWithLove />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="shop" element={<Shop />} />
        <Route path="enews" element={<Enews />} />
        <Route path="guestfeedonation" element={<GuestFeeDonation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tax-information" element={<TaxInformation />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="read" element={<Read />} />
        <Route path="planepull" element={<PlanePull />} />
        <Route path="hitem" element={<HitEm />} />
        <Route path="champions" element={<Champions />} />
      </Route>
    </Routes>
  );
}
