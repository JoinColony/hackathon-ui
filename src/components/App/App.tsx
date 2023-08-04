import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ResultsPage from 'pages/ResultsPage';
import VotePage from 'pages/VotePage';
import AdminPage from 'pages/AdminPage';
import ProjectSetupPage from 'pages/ProjectSetupPage';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import Navbar from 'components/Navbar';
import PoolPage from 'pages/PoolPage';
import AllProjectsPage from 'pages/AllProjectsPage';
import AllLeaguesPage from 'pages/AllLeaguesPage/AllLeaguesPage';
import ProjectPage from 'pages/ProjectPage';
import TierPage from 'pages/TierPage/TierPage';
import PromotePage from 'pages/PromotePage/PromotePage';

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/promote" element={<PromotePage />} />
        <Route path="/setup" element={<ProjectSetupPage />} />
        <Route path="/pool" element={<PoolPage />} />
        <Route path="/tier/:id" element={<TierPage />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
        <Route path="/all-leagues" element={<AllLeaguesPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route
          path="*"
          element={
            <div className="w-full flex justify-center text-4xl mt-12">
              404 - Page not found!
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
