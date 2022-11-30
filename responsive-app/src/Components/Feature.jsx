import React from 'react'
import styled from 'styled-components'
import Thumb from '../Img/thumbup.png';
const Feature = () => {

    const Container = styled.div`
    display: flex;
    `;
    const Left = styled.div`
        width: 50%;
    `;
    const Image = styled.img`
        width: 60%;
    `;
    const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  
    `;
    const Title = styled.span`
        font-size:70px;
    `;
    const SubTitle = styled.span`
        font-size: 24px;
        font-family: italic;
        color: #333;
        margin-top: 30px;
    `;
    const Desc = styled.p`
        font-size:20px;
        margin-top: 30px;
        color: #777;

    `;
    const Button = styled.button`
        width:150px;
        border: none;
        padding:15px 20px;
        color: white;
        background-color: darkblue;
        font-size: 20px;
        border-radius: 10px;
        margin-top: 20px;
        cursor: pointer;
    
    `;

    

  return (
    <Container>
        <Left>
            <Image src={Thumb}/>
        </Left>
        <Right>
            <Title>
                <b>good</b>design <br />
                <b>good</b> business 
            </Title>
            <SubTitle>We know that good design means good business</SubTitle>
            <Desc>We believe that designing product and
                 service on closes partnership with our clien
                is the only way to have real impact on their business</Desc>
            <Button>Learn More</Button>
        </Right>
    </Container>
   
  )
}

export default Feature