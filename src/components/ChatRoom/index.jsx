import React, {useState} from "react"
import {ChatRoomLeftStyled, ChatRoomMiddleStyled, ChatRoomRightStyled, ChatRoomStyled} from "./styles";
import ChatRoomLeft from "../ChatRoomLeft";
import ChatRoomMiddle from "../ChatRoomMiddle";
import ChatRoomRight from "../ChatRoomRight";

function ChatRoom() {

    const [isRightOpen,setIsRightOpen]=useState(false)
    const [isLeftOpen,setIsLeftOpen]=useState(false)

    return(
        <ChatRoomStyled>
            <ChatRoomLeftStyled isLeftOpen={isLeftOpen}>
                <ChatRoomLeft/>
            </ChatRoomLeftStyled>
            <ChatRoomMiddleStyled>
                <ChatRoomMiddle isRightOpen={isRightOpen}
                                setIsRightOpen={()=>setIsRightOpen(!isRightOpen)}
                                isLeftOpen={isLeftOpen}
                                setIsLeftOpen={()=>setIsLeftOpen(!isLeftOpen)}/>
            </ChatRoomMiddleStyled>
            <ChatRoomRightStyled isLessonInfoOpen={isRightOpen}>
                <ChatRoomRight />
            </ChatRoomRightStyled>
        </ChatRoomStyled>
    )
}

export default ChatRoom