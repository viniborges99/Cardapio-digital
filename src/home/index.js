import React from 'react'
import HomeLogo from "../assets/burger (1) 1.png"
import CategoryCarousel from '../components/CategoryCarousel/index'

import {Container, HomeImg} from './styles'
import OffersCarousel from '../components/OffersCarousel'

function Home(){
    return(
        <Container>
            <HomeImg src={HomeLogo} alt="Logo da Home" />
            <CategoryCarousel/>
            <OffersCarousel/>
        </Container>
    )
}

export default Home