import styled from "styled-components";

export const TasksChatBox = styled.div`
display: flex;
background-color: var(--light-grey-bg);
height: 50px;
`;

export const TasksChat = styled.div`
position: relative;
width: 50%;
text-align: center;
padding: 12px;
font-size: 16px;
font-weight:500;
color: ${props => props.active ? "black" : "var(--light-grey-text)"};
border-bottom: 2px solid ${props => props.active ? "var(--green)" : "var(--light-grey-text)"};

sup{
//width: 20px;
//height: 20px;
padding: 1px 6.5px 2px;
font-size: 13px;
border-radius: 20px;
background-color: var(--red);
color: white;
//display: inline-flex;
//justify-content: center;
//align-items: center;
}

@media only screen and (max-width: 1024px){
font-size: 14px;
sup{
font-size: 12px;
}
}

`;

export const SearchBox = styled.div`
padding: 20px 15px 12px;
display: flex;
align-items: center;
background-color: var(--light-grey-bg);
border-bottom: 1px solid var(--light-grey-text);
`;

export const SearchIcon = styled.div`

`;

export const SearchInput = styled.input`
border: 0;
padding: 0 14px;
width: 150px;
flex-grow: 1;
background-color: transparent;
&:focus{
outline: 0;
}

`;

export const Chats=styled.div`
overflow: auto;
flex-grow: 1;
`;