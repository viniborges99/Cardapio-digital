
import Category from "../../assets/categoria.png"
import Carousel from 'react-elastic-carousel'
import hamburguer from '../../assets/hamburguer.png'
import entradas from '../../assets/entradas.png'
import bebidas from '../../assets/bebidas.png'
import { Container, CategoryImg, ContainerItens, Image, Button } from './styles'

//const [categories, setCategories] = useState([])

function CategoryCarousel() {

const breakPoints=[
    {width: 1, itemsToShow: 1},
    {width: 400, itemsToShow: 2},
    {width: 600, itemsToShow: 3},
    {width: 900, itemsToShow: 4},
    {width: 1300, itemsToShow: 5},
]

    return (
        <Container>
            <CategoryImg src={Category} alt="Logo da Home" />

            <Carousel itemsToShow={5} style={{width:'90%'}} breakPoints={breakPoints}>
                
                <ContainerItens>
                    <Image src={hamburguer} alt="foto da porcao de tilapia" />
                    <Button>Porções</Button>
                </ContainerItens>
                <ContainerItens>
                    <Image src={entradas} alt="foto da porcao de tilapia" />
                    <Button>Entradas</Button>
                </ContainerItens>
                <ContainerItens>
                    <Image src={bebidas} alt="foto da porcao de tilapia" />
                    <Button>Bebidas</Button>
                </ContainerItens>
                <ContainerItens>
                    <Image src={hamburguer} alt="foto da porcao de tilapia" />
                    <Button>Porções</Button>
                </ContainerItens>
                
                
            </Carousel>
        </Container>
    )
}

export default CategoryCarousel