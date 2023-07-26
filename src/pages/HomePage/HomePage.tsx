import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      Home Page
      <div>
        <Link to="/results" className="text-blue-500">
          Results page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
