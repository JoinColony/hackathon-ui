import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ResultsPage from 'pages/ResultsPage';
import VotePage from 'pages/VotePage';
import AdminPage from 'pages/AdminPage';
import ProjectSetupPage from 'pages/ProjectSetupPage';
import { AuthProvider } from 'components/AuthContext/AuthContext';
import Navbar from 'components/Navbar';
import LeaguePage from 'pages/LeaguePage/LeaguePage';

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/setup" element={<ProjectSetupPage />} />
        <Route path="/league" element={<LeaguePage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
