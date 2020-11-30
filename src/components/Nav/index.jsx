import React from "react"
import {Icon, NavBox, NavName} from "./styles";

function Nav({icon,name,active,onClick}) {
    return(
        <NavBox onClick={onClick} active={active}>
            <Icon active={active}>
                {icon}
            </Icon>
            <NavName active={active}>
                {name}
            </NavName>

        </NavBox>
    )
}

export default Nav