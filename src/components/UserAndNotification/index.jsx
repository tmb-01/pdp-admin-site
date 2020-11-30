import React from "react"
import {FullName, Icon, UserNotificationBox, UserNotificationContainer} from "./styles";
import {ReactComponent as User} from "../../assets/icons/user.svg"
import {ReactComponent as Bell} from "../../assets/icons/bell.svg"

function UserAndNotification({fullName}) {
    return(
        <UserNotificationContainer>
            <UserNotificationBox>
                <FullName>
                    {fullName}
                </FullName>
                <Icon>
                    <User/>
                </Icon>
                <Icon last>
                    <Bell/>
                </Icon>
            </UserNotificationBox>

        </UserNotificationContainer>
    )
}

export default UserAndNotification