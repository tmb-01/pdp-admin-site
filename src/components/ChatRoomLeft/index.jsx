import React, {useState} from "react"
import {Chats, SearchBox, SearchIcon, SearchInput, TasksChat, TasksChatBox} from "./styles";
import {ReactComponent as Search} from "../../assets/icons/search.svg"
import {ReactComponent as BesideSearch} from "../../assets/icons/besideSearch.svg"
import AvatarImg from "../../assets/images/photo_2020-11-08_20-59-43.jpg"
import ListOfChats from "../ListOfChats";

function ChatRoomLeft() {
    const [tasksChatInfo, setTasksChatInfo] = useState([
        {
            name: "Vazifalar",
            numberOfMessages: 5
        }, {
            name: "Chat",
            numberOfMessages: 0
        }
    ])

    const [activeIndex, setActiveIndex] = useState(0)

    const [listOfChatsInfo, setListOfChatsInfo] = useState([
        {
            id: 1,
            avatar: AvatarImg,
            fullName: "Bessie Cooper",
            lastMessage: "Salom mening vazifamlarim ni tekshirdizmi ustoz.",
            time: "12:34",
            numberOfMessages: 4,
            active: true
        },
        {
            id: 2,
            avatar: AvatarImg,
            fullName: "Maraim Tukhtasunov",
            lastMessage: "Salom mening vazifamlarim ...",
            time: "12:34",
            numberOfMessages: 4,
            active: false
        },
        {
            id: 3,
            avatar: AvatarImg,
            fullName: "Maraim Tukhtasunov",
            lastMessage: "Salom mening vazifamlarim ...",
            time: "12:34",
            numberOfMessages: 4,
            active: false
        },
        {
            id: 4,
            avatar: '',
            fullName: "Maraim Tukhtasunov",
            lastMessage: "Salom mening vazifamlarim ...",
            time: "12:34",
            numberOfMessages: 4,
            active: false
        },
    ])

    const [activeListOfChatsInfo, setActiveListOfChatsInfo] = useState(1)

    return (
        <>
            <TasksChatBox>
                {tasksChatInfo.map(({name, numberOfMessages}, index) =>
                    <TasksChat active={activeIndex === index}
                               onClick={() => setActiveIndex(index)}
                    >
                        {name} {numberOfMessages > 0 ? <sup>{numberOfMessages}</sup> : ""}
                    </TasksChat>
                )}
            </TasksChatBox>
            <SearchBox>
                <SearchIcon>
                    <Search/>
                </SearchIcon>
                <SearchInput placeholder="Search"/>
                <SearchIcon>
                    <BesideSearch/>
                </SearchIcon>
            </SearchBox>

            <Chats>
                {listOfChatsInfo.map(({id, avatar, fullName, lastMessage, time, numberOfMessages, active}) =>
                    <ListOfChats avatar={avatar}
                                 fullName={fullName}
                                 lastMessage={lastMessage}
                                 time={time}
                                 numberOfMessages={numberOfMessages}
                                 active={id === activeListOfChatsInfo}
                                 onClick={() => setActiveListOfChatsInfo(id)}
                    />
                )}
            </Chats>
        </>
    )
}

export default ChatRoomLeft