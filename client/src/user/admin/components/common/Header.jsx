import { useAuth } from "../../../../contexts/AuthContext";

const Header = ({ title }) => {
  const { UserData, logout } = useAuth();

  return (
    <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8'>
        {/* Title Section */}
        <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>

        {/* User Name Section */}
        <div className='text-gray-100 text-lg flex items-center space-x-4'>
          <span>
            {UserData.name}, {UserData.role}
          </span>
          {/* Logout Button */}
          <button
            onClick={logout}
            className='text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg shadow transition-colors'
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
