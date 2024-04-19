
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login";
import Homepage from "./components/Homepage/Homepage";
import Machine from "./components/Machine/Machine";
import About from "./components/About/About";
import Contact from "./components/Contributors/Contributors";
const appRouter =createBrowserRouter([
  {
  path:'/',
  element:<Login/>,
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/homepage',
    element:<Homepage/>
  },
  {
    path:'/machine',
    element:<Machine/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }

]);


function App() {
  return (
    
      <RouterProvider router={appRouter}/>
    
  );
}

export default App;




// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './components/Login/login'
// import Homepage from './components/Homepage/Homepage'
// import Header from './components/Header/Header'
// import useToken from './components/Token/useToken'
// import './App.css'

// function App() {
//   const { token, removeToken, setToken } = useToken();

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header token={removeToken}/>
//         {!token && token!=="" &&token!== undefined?  
//         <Login setToken={setToken} />
//         :(
//           <>
//             <Routes>
//               <Route exact path="/profile" element={<Homepage token={token} setToken={setToken}/>}></Route>
//             </Routes>
//           </>
//         )}
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
