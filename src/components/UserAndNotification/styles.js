import styled from "styled-components";


export const UserNotificationContainer=styled.div`
width: 100%;
margin-bottom: 28px;

@media only screen and (max-width:425px){
margin-bottom: 15px;
}

`;

export const UserNotificationBox=styled.div`
width: fit-content;
margin: 0 0 0 auto;
display: flex;
align-items: center;
//margin-bottom: 28px;
`;

export const Icon=styled.div`
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
//padding: 12px 15px;
background-color: var(--light-grey-bg);
border-radius: 50%;
margin-left:${props => props.last?"25px":"16px"};

@media only screen and (max-width:425px){
width: 30px;
height: 30px;

svg{
width: 13px;
}

}

`;

export const FullName=styled.p`
font-weight: 500;
font-size: 16px;

@media only screen and (max-width:425px){
font-size: 13px;
}

`;

