import { Link } from 'react-router-dom';
import LoginModal from 'components/LoginModal';

const HomePage = () => {
  return (
    <div>
      Home Page
      <LoginModal onClose={() => {}} />
      <div className="flex flex-col">
        <Link to="/results" className="text-blue-500">
          Results Page
        </Link>
        <Link to="/vote" className="text-blue-500">
          Vote Page
        </Link>
        <Link to="/admin" className="text-blue-500">
          Admin Page
        </Link>
        <Link to="/setup" className="text-blue-500">
          Setup Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
