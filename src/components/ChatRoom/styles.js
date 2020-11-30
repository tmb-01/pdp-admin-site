import styled from "styled-components";

export const ChatRoomStyled=styled.div`
width: 100%;
display: flex;
position: relative;

@media only screen and (max-width:962px){
height: 500px;
}


`;

export const ChatRoomLeftStyled=styled.div`
width: 26%;
border: 1px solid var(--light-grey-text);
//height: 100%;
display: flex;
flex-direction: column;
@media only screen and (max-width:962px){
width: 35%;
}

@media only screen and (max-width:768px){
width: ${props=>props.isLeftOpen?"260px":0};
border: ${props=>!props.isLeftOpen && 0};
overflow: hidden;
transition-duration: 0.5s;

position: absolute;
top: 0;
left: 0;
bottom: 0;
z-index: 9;

}

`;

export const ChatRoomMiddleStyled=styled.div`
width: 50%;
display: flex;
flex-direction: column;

@media only screen and (max-width:962px){
width: 65%;
}

@media only screen and (max-width:768px){
width: 100%;
border-left: 1px solid var(--light-grey-text);
}

`;

export const ChatRoomRightStyled=styled.div`
width: 24%;
padding: 16px;
background-color: white;
overflow: auto;
@media only screen and (max-width:1280px){
padding-right: 0;
}

@media only screen and (max-width:962px){
transition-duration: 0.5s;
height: 500px;
width: ${props=>props.isLessonInfoOpen?"250px":0};
border: ${props=>props.isLessonInfoOpen?"1px solid var(--light-grey-text)":0};
position: absolute;
top: 0;
right: 0;
bottom: 0;
//width: 0;
//overflow: hidden;
//padding: 0;
padding: ${props=>props.isLessonInfoOpen?"16px":0};
}


`;

