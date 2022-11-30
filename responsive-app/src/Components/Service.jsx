import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../Img/boy.png';
import MiniCard from './MiniCard';
import Icon from '../Img/play.png'



    const Container = styled.div`
        display: flex;
        height: 100%;
    `;
    const Left = styled.div`
        width: 50%;
        position: relative;
    `;
    const Image = styled.img`
        display: ${(props)=> props.open && "none"};
        width: 80%;
        margin-left:100px ;
    `;
    const Video = styled.video`
        display: ${(props)=> !props.open && "none"};
        height: 300px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    `;
    const Right = styled.div`
        width: 50%;
    `;
    const Wrapper = styled.div`
        padding:50px ;
        display: flex;
        flex-direction: column;
    `;
    const Title = styled.h1`
    font-weight:bold;
    `;
    const Desc = styled.p`
        font-size: 20px;
        color: #555;
        margin-top: 20px;
    `;
    const CardContainer = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    `;
    const Button = styled.button`
        border: none;
        width: 180px;
        border-radius: 10px;
        padding: 15px;
        background-color: darkblue;
        color: white;
        font-size: 20px;
        margin-top: 50px;
        cursor: pointer;
       display: flex;
       align-items: center;

    `;
    const Play = styled.img`
        width: 20px;
        margin-right: 10px;
        
    `;
const Service = () => {
        const [open, setOpen] = useState(false);
  return (
    <Container>
        <Left>
            <Image open ={open}  src={How} />
            <Video  open ={open} 
            autoPlay
            loop
            controls 
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761" />
        </Left>
        <Right>
            <Wrapper>
                <Title>Adventures in creative age</Title>
                <Desc>We believe that designing product and
                    service on closes partnership with our clien
                    is the only way to have real impact on their business
                </Desc>
            </Wrapper>
            <CardContainer>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
            </CardContainer>
            <Button onClick={()=> setOpen(true)} ><Play src={Icon} />How it works</Button>
        </Right>
    </Container>
  )
}

export default Service