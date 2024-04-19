import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.style"


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);


  const handlelogout=()=>{
    const token = sessionStorage.getItem("token");
    sessionStorage.removeItem("token");
    window.location.href ='/'

  }



  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/homepage"> Home</NavbarLink>
            <NavbarLink to="/machine"> Analyser</NavbarLink>
            
            <NavbarLink to="/about"> About</NavbarLink>
            <NavbarLink to="/contact"> Contributors</NavbarLink>
            
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <button onClick={handlelogout}>Logout</button>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/machine"> Analyser</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contributors</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;