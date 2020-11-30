import React from "react"
import {
    ChatAvatar,
    ChatBox,
    FullName,
    FullNameLastMessage,
    LastMessage,
    NumberOfMessage,
    Time,
    TimeNumberOfMessage
} from "./styles";

function ListOfChats({avatar, fullName, lastMessage, time, numberOfMessages, active, onClick}) {
    return (
        <ChatBox active={active} onClick={onClick}>
            <ChatAvatar active={active}>

                {avatar?<img src={avatar} alt={"image of " + fullName}/>:<p>{fullName.charAt(0)}</p>}
            </ChatAvatar>
            <FullNameLastMessage>
                <FullName active={active}>
                    {fullName}
                </FullName>
                <LastMessage active={active}>
                    {lastMessage}
                </LastMessage>
            </FullNameLastMessage>
            <TimeNumberOfMessage>
                <Time active={active}>
                    {time}
                </Time>
                {numberOfMessages > 0 ?
                    <NumberOfMessage active={active}>
                        {numberOfMessages}
                    </NumberOfMessage> : ""}
            </TimeNumberOfMessage>
        </ChatBox>
    )
}

export default ListOfChats