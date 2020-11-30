import styled from "styled-components";
import Calendar from "../assets/icons/calendar.svg"

export const DisplayFlex = styled.div`
display: flex;
align-items: center;
`;

export const DisplayFlexSpaceBetween = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const TitleOfTable = styled.p`
//width: calc(100% - 50px);
font-size: 14px;
line-height: 16px;
font-weight: 700;
`;

export const IconOfCalendar = styled.div`
width: 40px;
height: 40px;

display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: var(--light-grey-bg);

background-image: url(${Calendar});
background-repeat: no-repeat;
background-position: center;
`;

export const SubTitle = styled.div`
width: fit-content;
margin-right: 0;
margin-left: auto;
`;

export const P30px = styled.p`
font-size: 30px;
font-weight: 700;
`;

export const SmallP = styled.p`
display: inline;
font-size: 14px;
`;

export const DateBesideCalendarIcon = styled.p`
font-size: 14px;
margin: 0 16px 0 26px;
`;

export const LineType = styled.p`
font-size: 15px;
font-weight: 500;
position: relative;
margin-left: 30px;
&:before{
content: "";
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${props=>props.color};

//margin-right: 10px;

position: absolute;
left: -15px;
top: 0;
bottom: 0;

margin: auto;

}

`;

export const SubLineType=styled.p`
font-size: 14px;
font-weight: 400;
color: var(--dark-grey);
margin-left: 30px;
line-height: 14px;
`;