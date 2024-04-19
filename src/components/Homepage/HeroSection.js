import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
background-color: rgb(141, 141, 141);
background-image: url('http://your-photography.com/files/2016/02/HH0A5456.jpg');
background-repeat: no-repeat;
background-size: 100%;
color: black;
height: 0;
padding-bottom: 55%;
text-align: left;
overflow: hidden;
`;

const FrostedGlassOverlay = styled.div`
background-color: rgba(255, 255, 255, 0.3);
`;

const HeroContent = styled.div`
display: block;
margin: 0 20% 0 auto;
width: 25rem;
padding: 3.125rem;
margin-top: 18%;

@media all and (max-width: 56.25rem) {
  margin-right: 12%;
  margin-top: 9rem;
  width: 18rem;
  padding: 1.5rem;
  padding-top: 2rem;
}

@media all and (max-width: 31.25rem) {
  margin-right: auto;
  margin-left: auto;
  margin-top: 21%;
  width: 80%;
  padding-top: 5%;
}
`;

const HeroButton = styled.button`
color: white;
border-radius: 0.1875rem;
border: none;
background-color: rgb(0, 153, 255);
font-size: 1.25rem;
padding: 0.625rem 1.875rem;
height: 3.125rem;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <FrostedGlassOverlay>
        <HeroContent>
          <h1>Frosted Glass</h1>
          <p>Next level street art gastropub...</p>
          <HeroButton>Order now</HeroButton>
        </HeroContent>
      </FrostedGlassOverlay>
    </HeroContainer>
  );
};

export default HeroSection;
