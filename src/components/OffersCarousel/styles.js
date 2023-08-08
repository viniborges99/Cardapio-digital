import styled from 'styled-components'

export const Container = styled.div`
background-color: #ffff;
display: flex;
flex-direction: column;
align-items: center;
padding: 35px 0;
gap: 35px;
.rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
}
.rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
}
.rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
}

`

export const CategoryImg = styled.img`

@media(max-width: 415px){
    width: 100vw;

}
`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
.StyledPrice{
    font-size:18px;
    font-weight:bold;
}

`
export const OfferPrice = styled.p`
font-size: 15px;
font-style: normal;
line-height: 120%;
color: red;
text-decoration-line:line-through;


`

export const Image = styled.img`
width: 200px;
border-radius:15px;
object-fit:cover;
margin-bottom:16px;

`

export const Button = styled.button`
margin-top: 16px;
background-color: #9758a6;
border-radius:8px;
height: 50px;
border: none;

font-size: 22px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
cursor: pointer;

&:active{
    opacity: 0.6;
}
`