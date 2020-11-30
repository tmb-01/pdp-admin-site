import React from "react"
import PagesContainer from "../../components/PagesContainer";
import ChatRoom from "../../components/ChatRoom";

function PageContent(props) {
    return(
        <PagesContainer title={props.title}>
            {props.children}
        </PagesContainer>
    )
}

export default PageContent