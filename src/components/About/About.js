import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../NavBar/NavBar';
const AboutUsPage = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <h1>About Us</h1>
      <p>
        Welcome to Water Quality Analyser, your go-to platform for analyzing water quality using machine learning technology.
        Our website provides accurate predictions of water quality based on various input parameters.
      </p>
      <h2>Workflow</h2>
      <p>
        Our website's workflow involves the following steps:
      </p>
      <ol>
        <li>User inputs various parameters related to water quality into the provided form.</li>
        <li>The entered data is sent to our backend server for processing.</li>
        <li>Our machine learning model analyzes the data and predicts the quality of water.</li>
        <li>The predicted result is displayed to the user, indicating whether the water is potable or non-potable.</li>
      </ol>
    </Container>
    </>
  );
};

export default AboutUsPage;
