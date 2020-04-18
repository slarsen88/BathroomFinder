import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import PoopMenu from "./PoopMenu";
import CollapseMenu from "./CollapseMenu";
// import '../App.css'

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">home</a>
            <a href="/">About</a>
            <a href="/">top pooprooms</a>
            <a href="/">top poopers</a>
          </NavLinks>
          <PoopWrapper>
            <PoopMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </PoopWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}
// class NavBar extends Component {
//     render() {
//         return (
//             <div id="navmenu-outer">
//                 <div class="table">
//                     <ul id="horizontal-list">
//                         <li>Home </li>
//                         <li>About </li>
//                         <li>FAQ </li>
//                         <li>Contact </li>
//                         <li>TOP POOPERS </li>
//                     </ul>
//                     <h1>matt is a beautiful person</h1>
//                     <h2>and so is stu</h2>
//                 </div>
//             </div>        
//         )
//     }
// }

export default Navbar


const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const PoopWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
