import styled from "styled-components";
import {TitleOfTable} from "../../styles/styles";

export const StatisticsOfStudentsBoxStyled = styled.div`
width: 25%;
padding: 16px 22px;
border-right: 1px solid var(--light-grey-text);
border-bottom: 1px solid var(--light-grey-text);
`;

export const NameIconWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
`;


export const NameOfStatistic = styled(TitleOfTable)`
width: calc(100% - 50px);
`;

export const StatisticsNumberDurationWrapper = styled.div`
display: flex;
align-items: center;
`;

export const StatisticsInNumbers = styled.p`
font-size: 40px;
font-weight: 800;
color: ${props=>props.customColor};
margin-right: 13px;
`;

export const ChangesDurationWrapper = styled.div`


`;

export const Changes = styled.p`
font-size: 16px;
font-weight: 400;
color: ${props=>props.customColor};

`;

export const Duration = styled.p`
font-size: 14px;
font-weight: 400;
color: var(--dark-grey);
`;