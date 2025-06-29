import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

const Navbar = () => {
  const { logout, isLoggedIn } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('home');

  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(e.target)) {
        setDropdownOpen(false);
      }
      if (servicesRef.current && !(servicesRef.current as any).contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/login');
  };

  const handleNavClick = (name: string) => {
    setActive(name);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
          onClick={() => handleNavClick('home')}
        >
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-shop-local-logo-design_23-2149575769.jpg?semt=ais_hybrid&w=740"
            alt="LocalKart Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="text-3xl font-extrabold text-white drop-shadow">LocalKart</h1>
        </Link>

        {/* Hamburger */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMobileMenuOpen(prev => !prev)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-white font-medium">
          <Link
            to="/"
            onClick={() => handleNavClick('home')}
            className={`hover:text-yellow-300 relative transition ${active === 'home' ? 'text-yellow-300' : ''}`}
          >
            Home
            {active === 'home' && <span className="block h-1 bg-yellow-300 rounded mt-1" />}
          </Link>

          {/* Services Dropdown */}
          {/* Services Dropdown */}
      <div
        className="relative"
        ref={servicesRef}
        onMouseEnter={() => setServicesOpen(true)}
      >
        <span
          className={`cursor-pointer hover:text-yellow-300 transition relative ${active === 'services' ? 'text-yellow-300' : ''}`}
        >
          Services ▾
          {active === 'services' && <span className="block h-1 bg-yellow-300 rounded mt-1" />}
        </span>
        {servicesOpen && (
          <ul className="absolute left-0 mt-2 bg-white text-gray-800 border border-gray-200 shadow-xl rounded-lg w-48 z-50">
            {['ac-repair', 'electrician', 'plumbing', 'salon'].map(service => (
              <li key={service}>
                <Link
                  to={`/services/${service}`}
                  onClick={() => {
                    setActive('services');
                    setServicesOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 capitalize"
                >
                  {service.replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>


          <Link
            to="/provider"
            onClick={() => handleNavClick('provider')}
            className={`hover:text-yellow-300 transition relative ${active === 'provider' ? 'text-yellow-300' : ''}`}
          >
            Become a Provider
            {active === 'provider' && <span className="block h-1 bg-yellow-300 rounded mt-1" />}
          </Link>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                onClick={() => handleNavClick('login')}
                className={`bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition ${
                  active === 'login' ? 'ring-2 ring-white' : ''
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => handleNavClick('signup')}
                className={`bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition ${
                  active === 'signup' ? 'ring-2 ring-white' : ''
                }`}
              >
                Signup
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <span
                className="cursor-pointer text-xl"
                onClick={() => setDropdownOpen(prev => !prev)}
                title="User"
              >
                👤
              </span>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-blue-500 border border-gray-200 shadow-lg rounded w-32 z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-blue-400"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-white bg-white/10 backdrop-blur-lg rounded-lg p-4 border-t border-white/20">
          <Link to="/" onClick={() => handleNavClick('home')} className="hover:text-yellow-300">Home</Link>

          <details className="text-white">
            <summary className="cursor-pointer hover:text-yellow-300">Services ▾</summary>
            <ul className="ml-4 mt-2">
              {['ac-repair', 'electrician', 'plumbing', 'salon'].map(service => (
                <li key={service}>
                  <Link
                    to={`/services/${service}`}
                    onClick={() => handleNavClick('services')}
                    className="block py-1 capitalize hover:text-yellow-200"
                  >
                    {service.replace('-', ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <Link to="/provider" onClick={() => handleNavClick('provider')} className="hover:text-yellow-300">Become a Provider</Link>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
                onClick={() => handleNavClick('login')}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                onClick={() => handleNavClick('signup')}
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-left text-red-200 hover:underline"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
