import styled from "styled-components";

export const ChatBox = styled.div`
display: flex;
background-color: ${props => props.active ? "var(--green)" : "white"};
padding: 16px 11px;
flex-direction: row;
border-bottom: 1px solid var(--light-grey-text);

`;

export const ChatAvatar = styled.div`
width: 40px;
height: 40px;
overflow: hidden;
background: linear-gradient(147.99deg, rgba(0, 181, 51, 0.41) 8.65%, #00B533 94.23%);
border-radius: 50%;
p{
width: 100%;
height: 100%;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
color: white;
}

img{
width: 100%;
height: auto;
border-radius: 50%;
}
`;

export const FullNameLastMessage = styled.div`
padding: 0 8px;
width: calc(100% - 69px);
`;

export const FullName = styled.p`
font-size: 16px;
font-weight: 600;
color: ${props => !props.active ? "black" : "white"};
`;

export const LastMessage = styled.p`
font-size: 12px;
line-height: 14px;
font-weight: 400;
color: ${props => !props.active ? "var(--light-grey-text)" : "white"};
`;

export const TimeNumberOfMessage = styled.div`
display: inline-flex;
width: fit-content;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const Time = styled.p`
font-size: 12px;
line-height: 16px;
font-weight: 400;
color: ${props => !props.active ? "var(--light-grey-text)" : "white"};
`;

export const NumberOfMessage = styled.p`
width:22px;
height: 22px;
font-size: 12px;
display: flex;
//padding: 2px 7px;
border-radius: 20px;
background-color: ${props => props.active ? "white" : "var(--red)"};
align-items: center;
justify-content: center;
color: ${props => props.active ? "var(--green)" : "white"};
`;
