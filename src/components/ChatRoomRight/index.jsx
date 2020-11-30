import React, {useState} from "react"
import {
    AcceptDismiss, AcceptDismissButton,
    AllIconBox,
    AllStarIcons,
    Avatar,
    AvatarName,
    FullName,
    Icon,
    IconBox,
    IconText,
    StarIcon, TaskBox, TaskFile, TaskText, TaskTitle,
    LessonData, Select, TaskHistory, Button,
} from "./styles";
import AvatarImg from "../../assets/images/photo_2020-11-08_20-59-43.jpg"

import {ReactComponent as Chat} from "../../assets/icons/vazifalarVaChat.svg"
import {ReactComponent as Info} from "../../assets/icons/info.svg"
import {ReactComponent as Calendar} from "../../assets/icons/calendar.svg"
import {ReactComponent as Accept} from "../../assets/icons/accept.svg"
import {ReactComponent as Dismiss} from "../../assets/icons/dismiss.svg"
import {ReactComponent as File} from "../../assets/icons/smallFileIcon.svg"

// import { UnderHeader} from "../ChatRoomMiddle/styles";


function ChatRoomRight() {

    const [studentInfo, setStudentInfo] = useState({
        avatar: AvatarImg,
        fullName: "Maraim Tuxtasunov"
    })

    const [chosenRating, setChosenRating] = useState(0)

    const [taskInfo, setTaskInfo] = useState({
        title: "2. Fill yordamida berilgan animatsiyani yarating",
        text: "Kiritilgan stringning berilgan indexdan boshlab qolgan qismini chop qiluvchi dastur yozing. Masalan: String: android,index=2 Natija: “droid”;",
        file: "2-topshiriq savol.jpg"
    })

    console.log(chosenRating)
    return (
        <>
            <AvatarName>
                <Avatar>
                    <img src={studentInfo.avatar} alt=""/>
                </Avatar>
                <FullName>{studentInfo.fullName}</FullName>
            </AvatarName>

            <AllIconBox>
                <IconBox>
                    <Icon>
                        <Chat/>
                    </Icon>
                    <IconText>
                        Chatga o'tish
                    </IconText>
                </IconBox>
                <IconBox>
                    <Icon>
                        <Info/>
                    </Icon>
                    <IconText>
                        Kurs info
                    </IconText>


                    <LessonData  className={"hover"}>
                        <ul>
                            <li>
                                Frontend Development
                            </li>
                            <li>
                                1. Kirish. HTML haqida tushuncha-
                                lar. Amaliy
                            </li>
                            <li>
                                1.1 Boshlang’ich tushunchalar bo’yicha
                                tushuncha
                            </li>
                        </ul>

                    </LessonData>


                </IconBox>
                <IconBox>
                    <Icon>
                        <Calendar/>
                    </Icon>
                    <IconText>
                        Task history
                    </IconText>

                    <TaskHistory className={"hover"}>
                        <Select>
                            <option value="">Kurs tanglang</option>
                            <option value="">Kurs tanglang</option>
                            <option value="">Kurs tanglang</option>
                            <option value="">Kurs tanglang</option>
                        </Select>
                        <Select>
                            <option value="">Modul tanglang</option>
                            <option value="">Modul tanglang</option>
                            <option value="">Modul tanglang</option>
                            <option value="">Modul tanglang</option>
                        </Select>
                        <Select>
                            <option value="">Dars tanglang</option>
                            <option value="">Dars tanglang</option>
                            <option value="">Dars tanglang</option>
                            <option value="">Dars tanglang</option>
                            <option value="">Dars tanglang</option>
                        </Select>

                        <Button>Saqlash</Button>
                    </TaskHistory>
                </IconBox>
            </AllIconBox>

            <AllStarIcons>
                <StarIcon onClick={() => setChosenRating(1)} chosen={chosenRating >= 1}/>
                <StarIcon onClick={() => setChosenRating(2)} chosen={chosenRating >= 2}/>
                <StarIcon onClick={() => setChosenRating(3)} chosen={chosenRating >= 3}/>
                <StarIcon onClick={() => setChosenRating(4)} chosen={chosenRating >= 4}/>
                <StarIcon onClick={() => setChosenRating(5)} chosen={chosenRating >= 5}/>

            </AllStarIcons>

            <AcceptDismiss>
                <AcceptDismissButton accept>
                    <Accept/>
                </AcceptDismissButton>
                <AcceptDismissButton>
                    <Dismiss/>
                </AcceptDismissButton>
            </AcceptDismiss>

            <TaskBox>
                <TaskTitle>
                    {taskInfo.title}
                </TaskTitle>
                <TaskText>
                    {taskInfo.text}
                </TaskText>
                <TaskFile>
                    <File/>
                    {taskInfo.file}
                </TaskFile>
            </TaskBox>

        </>
    )
}

export default ChatRoomRight