
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Signup from "./components/Signup/signup";
// import Login from "./components/Login/Login";
// import Homepage from "./components/Homepage/Homepage";
// const appRouter =createBrowserRouter([
//   {
//   path:'/',
//   element:<Login/>,
//   },
//   {
//     path:'/signup',
//     element:<Signup/>
//   },
//   {
//     path:'/homepage',
//     element:<Homepage/>
//   }
// ]);


// function App() {
//   return (
    
//       <RouterProvider router={appRouter}/>
    
//   );
// }

// export default App;




import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"http://127.0.0.1:5000/homepage",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default App;
