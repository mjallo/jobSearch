import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #555;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #00b8d4;
  }

  &:active {
    color: #008ba3;
  }
`;

function NavigationBar() {
  return (
    <NavContainer>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <NavList>
        <NavItem>
          <NavLink to="/job-search">job-search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/job-offer">job-offer</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}

export default NavigationBar;
