import React from 'react';
import NavBar from '../NavBar/NavBar';
import backgroundImage from './water.jpeg';

const Homepage = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`, // Set the background image
      backgroundSize: 'cover', // Cover the entire container
      backgroundRepeat: 'no-repeat', // Prevent repeating of the background image
      minHeight: '100vh', // Ensure the background covers the entire viewport
    }}>
      <NavBar/>
      {/* Your homepage content goes here */}
    </div>
  )
}

export default Homepage;
