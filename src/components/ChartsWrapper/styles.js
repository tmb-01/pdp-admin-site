import styled from "styled-components";
import {Select} from "../ChatRoomRight/styles";
import {DisplayFlexSpaceBetween, SmallP} from "../../styles/styles";
// import ChartsWrapper from "./index";

export const ChartsWrapperStyled = styled.div`
display: flex;
`;

export const LineGraphCol = styled.div`
width: 70%;
border: 1px solid var(--light-grey-text);
`;

export const AllMoneyAmount = styled.div`
padding: 16px 22px 22px;
`;

export const MySelect = styled(Select)`
width: 170px;
margin: 0;
padding: 13px 20px;
font-size: 14px;
background-position: 140px 12px;
`;

export const AllAmountFooter = styled(DisplayFlexSpaceBetween)`
margin-top: 70px;
`;

export const SmallGreen=styled(SmallP)`
color: var(--green);
`;

export const MoneyToggleBox=styled.div`
border: 20px;
padding: 6px 1px;
background-color: var(--light-grey-bg);
color: var(--light-grey-text);
font-size: 10px;
display: flex;
border-radius: 20px;
`;

export const MoneySingleToggleBox=styled.div`
border: 20px;
padding: 6px 13px;
text-transform: uppercase;
${props=>props.active && "background-color: white; color: black"};
border-radius: 10px;
font-weight: 500;
`;


export const LineGraphBox=styled.div`
padding: 16px 22px 9px;
border: 1px solid var(--light-grey-text);

`;





export const SemiCircleCol = styled.div`
width: 30%;
border: 1px solid var(--light-grey-text);
`;
