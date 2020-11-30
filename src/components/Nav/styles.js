import styled from "styled-components";

export const NavBox = styled.div`
width: 100%;
display: flex;
align-items: center;
padding: 15px 0;
cursor: pointer;
`;

export const Icon = styled.div`
width: 20px;
display: flex;
align-items: center;
color: ${props => props.active ? "var(--green)" : "var(--light-grey-text)"};
`;

export const NavName = styled.div`
color: ${props => props.active ? "black" : "var(--light-grey-text)"};
width: 100%;
text-align: left;
margin-left: 15px;
`;

