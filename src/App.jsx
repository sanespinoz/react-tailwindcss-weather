import React, { useState } from 'react';
import Card from './components/Card';
import { fetchData } from './services/api';
import initialData from './helpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full flex p-4 sm:relative justify-center"
      >
        <input
          type="text"
          placeholder="city"
          value={city}
          className="p-3 rounded-lg outline-none text-indigo-900 w-full sm:max-w-[300px] flex-1"
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-[#1213DE] text-yellow-100 font-bold ml-3 p-3 rounded-lg"
        >
          Pesquisar
        </button>
      </form>

      <Card location={data.location} current={data.current} />
    </div>
  );
}

export default App;
