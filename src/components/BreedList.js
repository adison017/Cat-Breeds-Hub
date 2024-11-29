import React, { useEffect, useState } from 'react';
import CatService from '../services/CatService';

const BreedList = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // เก็บคำค้นหา

  useEffect(() => {
    CatService.getAllBreeds()
      .then(response => {
        setBreeds(response.data);
        setFilteredBreeds(response.data); // เริ่มต้นแสดงทั้งหมด
      })
      .catch(error => {
        console.error('Error fetching breeds:', error);
      });
  }, []);

  // ฟังก์ชันสำหรับกรองรายการตามคำค้นหา
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = breeds.filter(breed =>
      breed.name.toLowerCase().includes(query) // กรองตามชื่อสายพันธุ์
    );
    setFilteredBreeds(filtered);
  };

  // ฟังก์ชันสำหรับแสดงรายละเอียดเมื่อคลิก
  const [selectedBreed, setSelectedBreed] = useState(null); // สำหรับเก็บข้อมูลของสายพันธุ์ที่ถูกคลิก
  const handleCardClick = (breed) => {
    setSelectedBreed(breed);
  };

  // ฟังก์ชันสำหรับปิด Modal
  const closeModal = () => {
    setSelectedBreed(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Cat Breeds</h1>

      {/* เพิ่มฟอร์มค้นหา */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by breed name..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-80"
        />
      </div>

      {/* แสดงรายการสายพันธุ์แมว */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredBreeds.map(breed => (
          <div
            key={breed.id}
            className="card bg-yellow-100 w-96 shadow-xl cursor-pointer"
            style={{
              backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/08/15/18/02/paws-5491105_1280.png")',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // เพิ่มพื้นหลังโปร่งแสงทับภาพ
            }}
            onClick={() => handleCardClick(breed)} // เพิ่ม event สำหรับคลิก
          >
            <figure className="px-10 pt-10">
              <img
                src={breed.image?.url || 'https://via.placeholder.com/300'}
                alt={breed.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{breed.name}</h2>
              <p>
                {breed.description.length > 100
                  ? `${breed.description.slice(0, 100)}...`
                  : breed.description}
              </p>
              <div className="card-actions">
                <button className="btn btn-accent">More Info</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* แสดง Modal เมื่อมีการเลือกสายพันธุ์ */}
      {selectedBreed && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">{selectedBreed.name}</h2>
            <figure className="mb-4">
              <img
                src={selectedBreed.image?.url || 'https://via.placeholder.com/600x400'}
                alt={selectedBreed.name}
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </figure>
            <p className="text-lg text-gray-700">{selectedBreed.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreedList;
