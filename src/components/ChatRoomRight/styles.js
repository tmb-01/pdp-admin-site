import styled from "styled-components";
import {ReactComponent as Star} from "../../assets/icons/bigStar.svg"

import ArrowDown from "../../assets/icons/angle-down-solid.svg"


export const AvatarName = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;


export const Avatar = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
overflow: hidden;

img{
width: 100%;
}
`;


export const FullName = styled.p`
font-weight: 700;
font-size: 18px;
margin-top: 10px;
text-align: center;

@media only screen and (max-width: 1024px){
font-size: 16px;
}

`;

export const AllIconBox = styled.div`
display: flex;
justify-content: space-around;
margin: 24px 0 70px;
`;

export const IconBox = styled.div`
position: relative;

&:hover{
transition-duration: 0.5s;

div.hover{
display: block;
transition-duration: 0.5s;

}}



`;
export const Icon = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
background-color: var(--light-grey-bg);
border-radius: 50%;
color: black;
`;
export const IconText = styled.p`
font-size: 12px;
font-weight: 400;
margin: 6px auto 0;
text-align:center;
`;


export const LessonData = styled.div`
position: absolute;
top: 50px;
right: 25px;

transition-duration: 0.5s;

display: none;

box-shadow: 0 2px 55px rgba(216, 216, 216, 0.5);

width:300px;
height: fit-content;
padding: 25px 25px 5px 45px;

background-color: white;

z-index: 999999999999999;

ul{

list-style: none;

li{
margin-bottom: 20px;
font-size: 14px;
font-weight: 400;
}

 li::before {
  content: "";
  width: 10px;
  height: 10px;
  //color: red;
  background-color: var(--green);
  border-radius: 50px;
  display: inline-block; 
  //width: 16px;
  margin-left: -20px;
  margin-right: 10px;
}
}
`;


export const TaskHistory = styled.div`
display: none;
position: absolute;
top:50px;
right: 25px;

padding: 24px;

width: 268px;
background-color: white;
z-index: 99;

box-shadow: 0 2px 50px rgba(216, 216, 216, 0.56);

`;


export const Select = styled.select`
width: 100%;
padding: 17px 26px;
border: 1px solid #D8D8D8;
margin-bottom: 14px;
font-size: 16px;
font-weight: 500;


//background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
//background-repeat: no-repeat;
background-position: right .7em top 50%, 0 0;
//background-size: .65em auto, 100%;
appearance: none;





option{
margin-top: 20px;
padding: 24px 30px;

&:hover{
background-color: #00b533;
}
}
outline: 0;

background-image: url(${ArrowDown});
background-repeat: no-repeat;
background-size: 12px;
//background-position: 
//right 40px; 
//top:0;
//bottom: 0;



`;

export const Button = styled.button`
width: 100%;
padding: 15px;
text-align: center;
margin-top: 21px;
background-color: var(--green);
color: white;
border: 0;
font-size: 18px;
font-weight: 600;

&:focus{
outline: 0;
}
&:active{
opacity: 0.5;
}

`;


export const AllStarIcons = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 25px;
`;

export const StarIcon = styled(Star)`
color: ${props => props.chosen ? "var(--yellow)" : "var(--dark-grey)"};
opacity: ${props => props.chosen ? 1 : 0.36};
`;

export const AcceptDismiss = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

export const AcceptDismissButton = styled.div`
color: white;
width: 48%;
padding: 11px 0;
text-align: center;
background-color: ${props => props.accept ? "var(--green)" : "var(--red)"};
`;

export const TaskBox = styled.div`
margin-top: 90px;
`;

export const TaskTitle = styled.p`
font-size: 16px;
font-weight: 600;
`;

export const TaskText = styled.p`
padding-left:  12px;
border-left: 1px solid var(--green);
font-size: 14px;
font-weight: 400;
color: var(--dark-grey);
`;

export const TaskFile = styled.div`
display: flex;
padding: 15px 20px;
align-items: center;
border: 2px solid black;
font-size: 16px;
font-weight: 500;
margin-top: 30px;
svg{
margin-right: 15px;
}
`;

