import { Link } from 'react-router-dom';

const VotePage = () => {
  return (
    <div>
      Vote Page
      <div className='flex flex-col'>
        <Link to="/" className="text-blue-500">
           Home Page
        </Link>
        <Link to="/results" className="text-blue-500">
           Results Page
        </Link>
        <Link to="/admin" className="text-blue-500">
           Admin Page
        </Link>
      </div>
    </div>
  );
};

export default VotePage;
