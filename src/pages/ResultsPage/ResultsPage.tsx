import { Link } from 'react-router-dom';

const ResultsPage = () => {
  return (
    <div>
      Results Page
      <div className='flex flex-col'>
        <Link to="/" className="text-blue-500">
          Home Page
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

export default ResultsPage;
