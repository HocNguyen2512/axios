import React from 'react'
import styled from 'styled-components';
import Search from '../Img/search.png';

const MiniCard = () => {

    const Container = styled.div`
        width: 100px;
        padding: 20px;
        display: flex;
        flex-direction: column;
       align-items: center;
        -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
        box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
       
        width: 100px;
    `;
    const Image = styled.img`
        width: 20%;
       
    `;
    const Text = styled.span`
        margin-top: 10px;
        text-align: center;
    `;
  return (
    <Container>
        <Image src={Search}/>
        <Text>
            Lorem ipsum dolor amet consectetur
        </Text>
    </Container>
  )
}

export default MiniCard