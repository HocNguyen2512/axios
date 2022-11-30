import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: 50px;
`;
const Wrapper = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 10px 20px;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`;
const Menu = styled.ul`
    list-style: none;
    display: flex;
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    color: gray;
    font-weight: bold;
`;

const Button = styled.button`
    border: 2px solid white;
    border-radius: 10px;
    background: crimson;
    color: white;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
`;
const Navbar = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
            <Logo>Agency</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Feature</MenuItem>
                <MenuItem>Service</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Left>
        <Button>JOIN NOW</Button>
       </Wrapper>
    </Container>
  )
  
}

export default Navbar