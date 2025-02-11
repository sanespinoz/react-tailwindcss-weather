import React from 'react';
import propTypes from 'prop-types';

function Card({ location, current }) {
  if (!location || !current) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white rounded-lg mt-10 sm:mt-3 p-6 shadow-2xl min-w-56	">
      <div className="text-center">
        <span className="block text-xl font-bold text-[#393989]">
          {location.name}
        </span>
        <span className="text-[#393989] text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>
      <div className="font-bold text-[#393989] flex justify-center mt-4 mb-2">
        <span className="text-6xl">{current.temp_c}</span>
        <span className="text-2xl mt-1">°C</span>
      </div>
      <div className="flex flex-col items-center text-center ">
        <img src={current.condition.icon} alt="weather icon" />
        <span className="block text-[#393989] font-medium">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   data: propTypes.object,
// }.required;
Card.propTypes = {
  location: propTypes.shape({
    name: propTypes.string.isRequired,
    region: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
  }).isRequired,
  current: propTypes.shape({
    temp_c: propTypes.number.isRequired,
    condition: propTypes.shape({
      icon: propTypes.string.isRequired,
      text: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default Card;
