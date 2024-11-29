/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // ตรวจสอบไฟล์ React
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // เพิ่ม DaisyUI
};

