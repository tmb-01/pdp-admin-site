import React, {useState} from "react"
import {
    AllMarksBox,
    Clip,
    Header,
    Hr,
    MarkBox,
    MarkNumber,
    MarkStarAndNumber,
    MarkSubTitle,
    MessageBox, MessageDateTime,
    MessageFileBox,
    MessageFileIcon,
    MessageFileName,
    MessageFileNameSizeBox,
    MessageFileSize,
    MessageMaxBox,
    MessagesContainer, MessageText, OpenChatRoomLeft, OpenChatRoomRight,
    PrevNext,
    PrevNextBox,
    RatingOfStudent,
    RatingOfStudentTextBox,
    Send,
    Textarea,
    TextareaContainer,
    TitleOfLesson,
    TitleOfTopic,
    Triangle,
    UnderHeader
} from "./styles";

import {ReactComponent as Star} from "../../assets/icons/star.svg"
import {ReactComponent as Prev} from "../../assets/icons/prev.svg"
import {ReactComponent as Next} from "../../assets/icons/next.svg"
import {ReactComponent as ClipIcon} from "../../assets/icons/clip.svg"
import {ReactComponent as SendIcon} from "../../assets/icons/send.svg"
import {ReactComponent as File} from "../../assets/icons/file.svg"

import ArrowRight from "../../assets/icons/angle-right-solid.svg"

function ChatRoomMiddle({isRightOpen, setIsRightOpen,isLeftOpen, setIsLeftOpen}) {

    const [marks, setMarks] = useState({
        markOne: {
            number: 5,
            rate: "qiyin",
            active: false
        },
        markTwo: {
            number: 3,
            rate: "oson",
            active: true
        },
        markThree: {
            number: 0,
            rate: "oson",
            active: false
        },
        markFour: {
            number: 0,
            rate: "qiyin",
            active: false
        },
        markFive: {
            number: 0,
            rate: "qiyin",
            active:false
        },
    })

    const [titleOfLesson, setTitleOfLesson] = useState("Murakkarb \n animatsiya yaratish")

    const [percentageOfLearning, setPercentageOfLearning] = useState(53)

    const [textareaValue, setTextareaValue] = useState()

    const [messageInfo, setMessageInfo] = useState([
        {
            senderId: 123,
            receiverId: 321,
            fileName: "2-topshiriq.zip",
            fileSize: "3.1 MB",
            text: "Men shu vazifani qildim. tekshitrib bera olasizmi? Rahmat ustoz",
            dateTime: "13.08.20/14:20"
        }, {
            senderId: 321,
            receiverId: 123,
            fileName: "2-topshiriq.zip",
            fileSize: "3.1 MB",
            text: "Men shu vazifani qildim. tekshitrib bera olasizmi? Rahmat ustoz",
            dateTime: "13.08.20/14:20"
        },
        {
            senderId: 123,
            receiverId: 321,
            fileName: "2-topshiriq.zip",
            fileSize: "3.1 MB",
            text: "Men shu vazifani qildim. tekshitrib bera olasizmi? Rahmat ustoz",
            dateTime: "13.08.20/14:20"
        }, {
            senderId: 321,
            receiverId: 123,
            fileName: "2-topshiriq.zip",
            fileSize: "3.1 MB",
            text: "Men shu vazifani qildim. tekshitrib bera olasizmi? Rahmat ustoz",
            dateTime: "13.08.20/14:20"
        },
    ])

    const [myId, setMyId] = useState(123)

    return (
        <>
            <Header>
                <AllMarksBox>
                    <MarkBox hide={marks.markOne.active}>
                        <MarkNumber>1</MarkNumber>
                        <MarkStarAndNumber hide={marks.markOne.number === 0}>
                            <Star/><p>{marks.markOne.number}</p>
                        </MarkStarAndNumber>
                        <MarkSubTitle>
                            {marks.markOne.rate}
                        </MarkSubTitle>
                    </MarkBox>
                    <MarkBox hide={marks.markTwo.active}>
                        <MarkNumber>2</MarkNumber>
                        <MarkStarAndNumber hide={marks.markTwo.number === 0}>
                            <Star/><p>{marks.markTwo.number}</p>
                        </MarkStarAndNumber>
                        <MarkSubTitle>
                            {marks.markTwo.rate}
                        </MarkSubTitle>
                    </MarkBox>
                    <MarkBox hide={marks.markThree.active}>
                        <MarkNumber>3</MarkNumber>
                        <MarkStarAndNumber hide={marks.markThree.number === 0}>
                            <Star/><p>{marks.markThree.number}</p>
                        </MarkStarAndNumber>
                        <MarkSubTitle>
                            {marks.markThree.rate}
                        </MarkSubTitle>
                    </MarkBox>
                    <MarkBox hide={marks.markFour.active}>
                        <MarkNumber>4</MarkNumber>
                        <MarkStarAndNumber hide={marks.markFour.number === 0}>
                            <Star/><p>{marks.markFour.number}</p>
                        </MarkStarAndNumber>
                        <MarkSubTitle>
                            {marks.markFour.rate}
                        </MarkSubTitle>
                    </MarkBox>
                    <MarkBox hide={marks.markFive.active}>
                        <MarkNumber>5</MarkNumber>
                        <MarkStarAndNumber hide={marks.markFive.number === 0}>
                            <Star/><p>{marks.markFive.number}</p>
                        </MarkStarAndNumber>
                        <MarkSubTitle>
                            {marks.markFive.rate}
                        </MarkSubTitle>
                    </MarkBox>

                </AllMarksBox>
                <PrevNextBox>
                    <PrevNext disable>
                        <Prev/>
                    </PrevNext>
                    <Hr/>
                    <PrevNext>
                        <Next/>
                    </PrevNext>
                </PrevNextBox>
            </Header>
            <UnderHeader>
                <TitleOfLesson>
                    {titleOfLesson}
                </TitleOfLesson>
                <RatingOfStudent>
                    <RatingOfStudentTextBox>
                        <p>O'quvchining reytingi:</p>
                        <p>{percentageOfLearning}%</p>
                    </RatingOfStudentTextBox>
                    {/*<Triangle/>*/}
                </RatingOfStudent>
            </UnderHeader>


            <MessagesContainer>

                {messageInfo.map(({senderId, fileName, fileSize, text, dateTime}) =>
                    <MessageMaxBox me={senderId === myId}>
                        <MessageBox me={senderId === myId}>
                            <MessageFileBox>
                                <MessageFileIcon me={senderId === myId}>
                                    <File/>
                                </MessageFileIcon>
                                <MessageFileNameSizeBox>
                                    <MessageFileName>
                                        {fileName}
                                    </MessageFileName>
                                    <MessageFileSize>
                                        {fileSize}
                                    </MessageFileSize>
                                </MessageFileNameSizeBox>
                            </MessageFileBox>
                            <MessageText>
                                {text}
                            </MessageText>
                        </MessageBox>
                        <MessageDateTime me={senderId === myId}>
                            {dateTime}
                        </MessageDateTime>
                    </MessageMaxBox>
                )}
            </MessagesContainer>
            <TextareaContainer>
                <Clip><ClipIcon/></Clip>
                <Textarea minRaws={1}
                          maxRows={4}
                          placeholder="Vazifa haqida nimadir yozing..."
                          value={textareaValue}
                          onChange={(e) => setTextareaValue(e.target.value)}
                />
                <Send typing={textareaValue}><SendIcon/></Send>

            </TextareaContainer>

            <OpenChatRoomRight isOpen={isRightOpen} onClick={setIsRightOpen}>
                <img src={ArrowRight} alt="<"/>
            </OpenChatRoomRight>
            <OpenChatRoomLeft isOpen={isLeftOpen} onClick={setIsLeftOpen}>
                <img src={ArrowRight} alt=">"/>
            </OpenChatRoomLeft>
        </>
    )
}

export default ChatRoomMiddle