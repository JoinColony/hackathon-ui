import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ResultsPage from 'pages/ResultsPage';
import VotePage from 'pages/VotePage';
import AdminPage from 'pages/AdminPage';
import ProjectSetupPage from 'pages/ProjectSetupPage';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import Navbar from 'components/Navbar';
import PoolPage from 'pages/PoolPage';
import LeaguePage from 'pages/LeaguePage';
import ApprovePoolPage from 'pages/ApprovePoolPage/ApprovePoolPage';
import AllLeaguesPage from 'pages/AllLeaguesPage/AllLeaguesPage';

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/setup" element={<ProjectSetupPage />} />
        <Route path="/pool" element={<PoolPage />} />
        <Route path="/league" element={<LeaguePage />} />
        <Route path="/approve-pool" element={<ApprovePoolPage />} />
        <Route path="/all-leagues" element={<AllLeaguesPage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
