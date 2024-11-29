import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <i className="fas fa-cat mr-2" style={{ color: "#63E6BE" }}></i> {/* เพิ่มไอคอนแมว */}
          Cat Breeds Dashboard
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <i className="fas fa-cat fa-2x" style={{ color: "#63E6BE" }}></i> {/* ไอคอนแมว */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
