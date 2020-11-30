import styled from "styled-components"

export const MainPageContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
color: #262626;
padding: 44px 55px;

@media only screen and (max-width: 1280px){
padding: 33px 44px;
}
@media only screen and (max-width:425px){
padding: 20px 25px;
}

`;

export const NavbarCol = styled.div`
width: 265px;
overflow: auto;
border-right: 1px solid lightgrey;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
padding: 44px 0 44px 55px;

transition-duration: 0.5s;

position: fixed;
top: 0;
left: 0;
bottom: 0;
z-index: 999;

@media only screen and (max-width: 1280px){
//margin: 0;
width: ${props=>!props.isOpen? 0 : "300px"};
//display: none;
border: ${props=>!props.isOpen && 0};
z-index: ${props=>props.isOpen && 9999};
padding: ${props=>props.isOpen?"33px 0 33px 44px":0};
}

::-webkit-scrollbar{
display: none;
}

`;

// export const NavbarWrapper=styled.div`
// width: fit-content;height: fit-content;
// overflow: auto;
// `;


export const NavbarButton = styled.div`
display: none;
width: 40px;
height: 40px;
align-items: center;
justify-content: center;

background-color: var(--light-grey-bg);

border-radius: 0 20px 20px 0;
border-top: 1px solid var(--dark-grey);
border-right: 1px solid var(--dark-grey);
border-bottom: 1px solid var(--dark-grey);

position: fixed;
top: 20%;
left: 0;
//bottom: 44px;
img{

transition-duration: 0.5s;

transform: ${props=>props.isNavbarOpen?"rotate(180deg)": "rotate(-360deg)"};
height: 70%;
}

@media only screen and (max-width: 1280px){
//margin: 0;
display: flex;
z-index: 99999;
}

@media only screen and (max-width:425px){
top: 10%;
width: 25px;
height: 30px;
}

`;


export const ContentCol = styled.div`
margin-left: 18%;
width: 82%;
padding-left: 57px;
@media only screen and (max-width: 1280px){
margin: 0;
width: 100%;
padding: 0;

}

`;

export const Logo = styled.div`
text-align: left;
margin-bottom: 70px;
`;

export const Navs = styled.div`

`;