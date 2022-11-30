import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.88);
    background-color:white ;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height:450px;
    margin: 50px;
    margin-top: 200px;
`;
const PriceContainer = styled.div`
    display: flex;
    align-items:center;
`;
const Price = styled.span`
   font-size: 70px;
   font-weight: 600;
`;
const Type = styled.button`
    width: 150px;
    height: 50px;
    border: 1px solid red;
    border-radius: 30px;
    color: red;
    background-color: white;
    font-size: 20px;
    cursor: pointer;
`;
const List = styled.ul`
   list-style: none;
   
`;
    const ListItem = styled.li`
        margin: 20px 0;
        font-size: 20px;
        font-weight: bold;
`;
const Button = styled.button`
    width: 120px;
    height: 50px;
    background-color: darkblue;
    color: white;
    border-radius: 20px;
    cursor: pointer;
`;
const PriceCard = () => {
  return (
    <Container>
        <PriceContainer>
        $ <Price>20</Price>/month
        </PriceContainer>
        <Type>Basic Plan</Type>
        <List>
            <ListItem>200 Hand-crafted Templates</ListItem>
            <ListItem>Exclusive Support</ListItem>
            <ListItem>50+ Prebuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>
        </List>
        <Button>Join Now</Button>
       
    </Container>
  )
}

export default PriceCard