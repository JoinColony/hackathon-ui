import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      Admin Page
      <div className='flex flex-col'>
        <Link to="/" className="text-blue-500">
           Home Page
        </Link>
        <Link to="/results" className="text-blue-500">
           Results Page
        </Link>
        <Link to="/vote" className="text-blue-500">
           Vote Page
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
