import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';


const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
`;


const Price = () => {
  return (
    <Container>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
    </Container>
  )
}

export default Price