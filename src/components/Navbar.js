import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 2rem;
    width: 100vw;
    background-color: #22637f;
  }

  li {
    list-style: none;
    margin: 2re;
  }
  li > * {
    text-decoration: none;
    font-family: cursive;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Yoga-Product</Link>
        </li>
        <li>
          <Link to="/batch-slot">Buy</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
