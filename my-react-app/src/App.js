import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import WhyKPMG from './pages/WhyKPMG';
import PracticeAreas from './pages/PracticeAreas';
import EntryCareers from './pages/EntryCareers';
import Experienced from './pages/Experienced';
import Contractor from './pages/Contractor';
import Executive from './pages/Executive';
import JobSearch from './pages/JobSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-kpmg" element={<WhyKPMG />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/entry-careers" element={<EntryCareers />} />
          <Route path="/experienced" element={<Experienced />} />
          <Route path="/contractor" element={<Contractor />} />
          <Route path="/executive" element={<Executive />} />
          <Route path="/job-search" element={<JobSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
