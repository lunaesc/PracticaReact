import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from './HeroStyle'
import { Button, Container, MainHeading } from '../../globalStyles'
import imgHero from '../../assets/mano_robot.jpeg'

const Hero = () => {
  return (
   <HeroSection>
        <HeroVideo src={imgHero}/>
    
        <Container>
            <MainHeading> Zona Tecnológica</MainHeading>
            <HeroText>
               We provide the best security systems for clients all over the world
            </HeroText>
            <ButtonWrapper>
                <Link to='Signup'>
                <Button>Get Started</Button>
                </Link>
                <HeroButton> Find More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero