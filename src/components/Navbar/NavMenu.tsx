import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <>
      <Link to="/" className="text-blue-500">
        Home Page
      </Link>
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
    </>
  );
};

export default NavMenu;
