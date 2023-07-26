import { Link } from 'react-router-dom';

const ResultsPage = () => {
  return (
    <div>
      Results Page
      <div>
        <Link to="/" className="text-blue-500">
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
