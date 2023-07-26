import LoginModal from 'components/LoginModal/LoginModal';
import { Link } from 'react-router-dom';

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
      </div>
    </div>
  );
};

export default HomePage;
