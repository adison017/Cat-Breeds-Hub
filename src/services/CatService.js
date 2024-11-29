import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_q6XBgZzliMR6HMNk3SslzTasErgNBsvhsw5Zp4utGBhFbTyrlE2FfV5kTtCu1nQt'; // สมัครสมาชิกเพื่อรับ API Key

const CatService = {
    getAllBreeds: () =>
      axios.get(`${API_URL}/breeds`, {
        headers: { 'x-api-key': API_KEY },
      }),
  };
  

export default CatService;
