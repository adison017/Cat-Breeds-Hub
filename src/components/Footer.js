import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Cat Breeds Dashboard. All Rights Reserved.</p>
        <p>Follow us on:</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a 
              href="https://www.facebook.com/aodazza" 
              className="text-yellow-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x" style={{color: '#63E6BE'}}></i>
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/khaw_oatx47/profilecard/?igsh=MTVyOHR2aHRudndnOQ==" 
              className="text-yellow-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x" style={{color: '#63E6BE'}}></i>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/adison017" 
              className="text-yellow-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x" style={{color: '#63E6BE'}}></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
