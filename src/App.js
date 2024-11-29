import React from 'react';
import Header from './components/Header';  // นำเข้า Header
import BreedList from './components/BreedList';
import Footer from './components/Footer'; // นำเข้า Footer
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ส่วนหัว */}
      <main >
        <BreedList /> {/* แสดงรายชื่อสายพันธุ์แมว */}
      </main>
      <Footer /> {/* ส่วนท้าย */}
    </div>
  );
}

export default App;
