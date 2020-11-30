import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';

export const Header = styled.div`
width: 100%;
height: fit-content;
display: flex;
border-top: 1px solid var(--light-grey-text);
border-right: 1px solid var(--light-grey-text);
border-bottom: 1px solid var(--light-grey-text);
`;

export const AllMarksBox = styled.div`
width: 80%;
display: flex;
height: 104px;
@media only screen and (max-width:425px){
height: fit-content;
}
`;

export const MarkBox = styled.div`
width: 20%;
display: flex;
text-align: center;
flex-direction: column;
align-items: center;
padding: 10px;
${props => props.hide ? "border-left: 1px solid var(--light-grey-text)" : ""};
border-right: 1px solid var(--light-grey-text);
opacity: ${props => !props.hide ? 0.3 : 1};

@media only screen and (max-width:425px){
padding: 7px;
}

`;

export const MarkNumber = styled.p`
font-size: 20px;
font-weight: 600;
line-height: 26px;

@media only screen and (max-width:425px){
font-size: 16px;
}

`;

export const MarkStarAndNumber = styled.div`
display: flex;
align-items: center;
padding: 10px 0 5px;
svg{

color: ${props => !props.hide ? "var(--yellow)" : "var(--light-grey-text)"};

@media only screen and (max-width:425px){
width: 12px;
height: 12px;
}

//color: #FFB436
};
p{
font-weight: 500;
font-size: 14px;
margin-left: 4px;
//line-height: 26px;
@media only screen and (max-width:425px){
font-size: 12px;
}
}

@media only screen and (max-width:425px){
padding: 3px 0 3px;
}

`;

export const MarkSubTitle = styled.p`
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
@media only screen and (max-width:425px){
font-size: 10px;
}
`;

export const PrevNextBox = styled.div`
width: 20%;
display: flex;
color: #E6E6E6;
`;

export const PrevNext = styled.div`
width: 50%;
display: flex;
color: black;
justify-content: center;
align-items: center;
opacity: ${props => props.disable ? 0.2 : 1};

`;

export const Hr = styled.hr`
height: 80%;
margin: auto;
//border: 0;
border-bottom:1px solid var(--light-grey-text);
`;

export const UnderHeader = styled.div`
padding: 20px;
display: flex;
align-items: center;
border-bottom: 1px solid var(--light-grey-bg);
cursor:pointer;
border-right:1px solid var(--light-grey-text); 
`;


export const TitleOfLesson = styled.p`
width: 45%;
font-weight: 600;
font-size: 16px;
line-height: 20px;
border-right: 1px solid var(--light-grey-text);

@media only screen and (max-width:425px){
font-size: 14px;
}

`;

export const RatingOfStudent = styled.div`
width: 55%;
padding: 0 10px;
display: flex !important;
justify-content: center;

`;

export const Triangle = styled.div`
width: 0;
height: 0;
position: relative;
border-top: 2px solid transparent;
border-bottom: 2px solid transparent;
border-right: 500px solid red;
`;

export const RatingOfStudentTextBox = styled.div`
display: flex;
justify-content: space-between;
font-size: 12px;
font-weight: 400;
width: 100%;
`;

export const MessagesContainer = styled.div`
width: 100%;
overflow: auto;
flex-grow: 1;
padding: 20px;
height: 300px;
border-right:1px solid var(--light-grey-text); 
position:relative;

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px lightgrey; 
  border-radius: 10px;
  visibility: hidden;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1); 
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.2);
}


&:hover{
::-webkit-scrollbar-track {
visibility: visible;  
}
::-webkit-scrollbar-thumb{
visibility: visible;
}
}


`;

export const OpenChatRoomRight = styled.div`
width:40px;
height: 100%;
background-color: var(--light-grey-bg);
//border-radius: 5px;
padding: 5px;
display: none;
align-items: center;
justify-content: center;

position: absolute;
top: 0;
right: -40px;
bottom: 0;

img{
transition-duration: 0.5s;
width: 100%;
transform: ${props=>props.isOpen?"rotate(-360deg)":"rotate(180deg)"};
}

@media only screen and (max-width:962px){
display: flex;
}

@media only screen and (max-width:425px){
width: 25px;
right: -25px;
}

`;

export const OpenChatRoomLeft = styled.div`
width:40px;
height: 100%;
background-color: var(--light-grey-bg);
//border-radius: 5px;
padding: 5px;
display: none;
align-items: center;
justify-content: center;

position: absolute;
top: 0;
left: -40px;
bottom: 0;
z-index: 999;
img{
transition-duration: 0.5s;
width: 100%;
transform: ${props=>props.isOpen?"rotate(-540deg)":"rotate(0deg)"};
}

@media only screen and (max-width:768px){
display: flex;
}

@media only screen and (max-width:425px){
width: 25px;
left:-25px;
}

`;


export const MessageMaxBox = styled.div`
max-width: 75%;
margin: ${props => props.me ? "0 auto 0 0" : "0 0 0 auto"};
`;

export const MessageBox = styled.div`
padding: 20px 16px;
width: fit-content;
background-color: ${props => props.me ? "var(--light-grey-bg)" : "var(--light-yellow)"};
border-radius: ${props => props.me ? "15px 15px 15px 0" : "15px 15px 0 15px"};
`;

export const MessageFileBox = styled.div`
display: flex;
align-items: center;
`;

export const MessageFileIcon = styled.div`
width: 40px;
height: 40px;
color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.me ? "var(--dark-grey)" : "var(--yellow)"};
`;

export const MessageFileNameSizeBox = styled.div`
margin-left: 10px;
`;

export const MessageFileName = styled.p`
font-weight: 600;
font-size: 14px;
//line-height: 26px;
`;

export const MessageFileSize = styled.p`
font-size: 14px;
font-weight: 400;
//line-height: 26px;
color: var(--dark-grey);
`;

export const MessageText = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 16px;
margin-top: 12px;
`;

export const MessageDateTime = styled.p`
width: fit-content;
font: 12px italic;
font-weight: 300;
//margin: 6px 0 20px auto;
margin: ${props => props.me ? "6px 15px 20px auto" : "6px 0 20px auto"};
`;

export const TextareaContainer = styled.div`
display: flex;
padding: 15px 20px;
align-items: center;
margin: auto 0 0 0;
border-top: 1px solid var(--light-grey-bg);
border-bottom: 1px solid var(--light-grey-text);
border-right: 1px solid var(--light-grey-text);

`;

export const Clip = styled.div`
color: #898989;
height: fit-content;
display: flex;
align-items: center;
margin: auto auto 0 0;
&:hover{
color: black;
}
`;

export const Textarea = styled(TextareaAutosize)`
width: calc(100%);
margin: 0 10px;
border: 0;
resize: none;

::-webkit-scrollbar {
  width: 5px;
  //visibility: hidden;
  //opacity: 0;
  //color: transparent;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px lightgrey; 
  border-radius: 10px;
  visibility: hidden;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1); 
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.2);
}


&:hover{
::-webkit-scrollbar-track {
visibility: visible;  
}
::-webkit-scrollbar-thumb{
visibility: visible;
}
}


&:focus{
outline: 0;
}
`;

export const Send = styled.div`
color: #00B533;
height: fit-content;
display: flex;
align-items: center;
opacity: ${props => props.typing ? 1 : 0.3};
margin: auto 0 0 auto;
`;