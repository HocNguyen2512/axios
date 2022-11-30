import React from 'react';
import styled from 'styled-components';
import Boy from '../Img/boy.png'
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
const Left = styled.div`
   width: 60%;
   display: flex;
   flex-direction: column;
    align-items: center;
    justify-content: center;
`;
    const Title = styled.h1`
        font-weight: bold;
        font-size: 60px;
        width: 60%;
    `;
    const Desc = styled.p`
        width: 60%;
        font-size: 20px;
        margin-top: 20px;
    `;
const Right = styled.div`
    width: 40% ;
    
`;
const Info = styled.div`
    width:60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
    const Button = styled.button`
        border-radius: 10px;
        width: 160px;
        height: 45px;
        background-color: blue;
        color: white;
        border: none;
        cursor: pointer;
    `;
const Contact = styled.div`
    display:flex;
    flex-direction: column;
`;
const Phone = styled.span`
    color: red;
    font-weight: bolds;
`;
const ContactText = styled.span`
    color:gray;
    margin-top: 5px;
`;
const Image = styled.img`
    width: 100%;
`;
const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in creative age</Title>
            <Desc>We believe that designing product and
                 service on closes partnership with our clien
                is the only way to have real impact on their business
            </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call Us (012)345-6789</Phone>
                    <ContactText>For any question or concem</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            <Image src={Boy} />
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Intro