
import Offers from "../../assets/OFERTAS.png"
import Carousel from 'react-elastic-carousel'
import hamburguer from '../../assets/hamburguer.png'
import entradas from '../../assets/entradas.png'
import bebidas from '../../assets/bebidas.png'
import { Container, CategoryImg, ContainerItens, Image, Button,OfferPrice } from './styles'

//const [categories, setCategories] = useState([])

function OffersCarousel() {

const breakPoints=[
    {width: 1, itemsToShow: 1},
    {width: 400, itemsToShow: 2},
    {width: 600, itemsToShow: 3},
    {width: 900, itemsToShow: 4},
    {width: 1300, itemsToShow: 5},
]

    return (
        <Container>
            <CategoryImg src={Offers} alt="Logo da Home" />

            <Carousel itemsToShow={5} style={{width:'90%'}} breakPoints={breakPoints}>
                
                <ContainerItens>
                    <Image src={hamburguer} alt="foto da porcao de tilapia" />
                    <p className="StyledPrice">X-Tudo Especial da Casa</p>
                    <OfferPrice>De:R$ 40,90 </OfferPrice>
                    <p className="StyledPrice">Por:R$ 35,90</p>
                    
                    <Button>Peça Agora</Button>
                </ContainerItens>
                <ContainerItens>
                    <Image src={entradas} alt="foto da porcao de tilapia" />
                    <p className="StyledPrice">Batata Frita</p>
                    <OfferPrice>De:R$ 40,90 </OfferPrice>
                    <p className="StyledPrice">Por:R$ 35,90</p>
                    <Button>Peça Agora</Button>
                </ContainerItens>
                <ContainerItens>
                    <Image src={bebidas} alt="foto da porcao de tilapia" />
                    <p className="StyledPrice"> Suco de maracujá</p>
                    <OfferPrice>De:R$ 40,90 </OfferPrice>
                    <p className="StyledPrice">Por:R$ 35,90</p>
                    <Button>Peça Agora</Button>
                </ContainerItens>
                <ContainerItens>
                    <Image src={hamburguer} alt="foto da porcao de tilapia" />
                    <p className="StyledPrice">X-Tudo Especial da Casa</p>
                    <OfferPrice>De:R$ 40,90 </OfferPrice>
                    <p className="StyledPrice">Por:R$ 35,90</p>
                    <Button>Peça Agora</Button>
                </ContainerItens>
                
                
            </Carousel>
        </Container>
    )
}

export default OffersCarousel