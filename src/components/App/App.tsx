import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ResultsPage from 'pages/ResultsPage';
import VotePage from 'pages/VotePage';
import AdminPage from 'pages/AdminPage';
import ProjectSetupPage from 'pages/ProjectSetupPage';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import Navbar from 'components/Navbar';
import PoolPage from 'pages/PoolPage';
import LeaguePage from 'pages/LeaguePage';
import ProjectPage from 'pages/ProjectPage';

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
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
