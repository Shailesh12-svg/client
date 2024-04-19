import React from 'react';
import "./contributors.css";
import Navbar from '../NavBar/NavBar';
const Contributors = () => {
  // Array of objects containing information about each person
  const persons = [
    
    {
      name: 'Deepak',
      regNo: '654321',
      pic: '/jane_smith.jpg'
    },
    {
      name: 'Nitish Kumar',
      regNo: '12017641',
      pic: '/jane_smith.jpg'
    },
    {
      name: 'Shailesh Mallick',
      regNo: '12001392',
      pic: '/john_doe.jpg' // Path to the picture file
    },
    
    {
      name: 'Shruti',
      regNo: '654321',
      pic: '/jane_smith.jpg'
    },
    {
      name: 'Mandeep',
      regNo: '654321',
      pic: '/jane_smith.jpg'
    },

  ];
  //Mentor
  const mentor = [
    {
      name: 'Shruti',
      regNo: '654321',
      pic: '/jane_smith.jpg'
    },
  ]

  return (
    <>
    <Navbar/>
    <div>
      <h1>Contributors</h1>
      <div className="persons-container">
        {persons.map((person, index) => (
          <div className="person-card" key={index}>
            <img src={person.pic} alt={person.name} />
            <h2>{person.name}</h2>
            <p>Registration No: {person.regNo}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Mentors */}
    <div>
      <h1>Mentor</h1>
      <div className="persons-container">
        {mentor.map((person, index) => (
          <div className="person-card" key={index}>
            <img src={person.pic} alt={person.name} />
            <h2>{person.name}</h2>
            <p>Registration No: {person.regNo}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


export default Contributors;