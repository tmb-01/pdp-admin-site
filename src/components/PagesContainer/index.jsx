import React from "react"
import {Container, Title} from "./styles";

function PagesContainer(props) {
    return(
        <Container>
            <Title>{props.title}</Title>
            {props.children}
        </Container>
    )
}

export default PagesContainer