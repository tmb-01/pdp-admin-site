import React, {useState} from "react"
import {ContentCol, Logo, MainPageContainer, NavbarButton, NavbarCol, NavbarWrapper, Navs} from "./styles";
import LogoPng from "../../assets/images/logo.png"
import {ReactComponent as LogoSvg} from "../../assets/images/logosvg.svg";

import {ReactComponent as Dashboard} from "../../assets/icons/dashboard.svg";
import {ReactComponent as BarchaKurslar} from "../../assets/icons/barchaKurslar.svg";
import {ReactComponent as VazifalarVaChats} from "../../assets/icons/vazifalarVaChat.svg";
import {ReactComponent as Qurilmalar} from "../../assets/icons/qurilmalar.svg";
import {ReactComponent as ZoomChat} from "../../assets/icons/zoomChat.svg";
import {ReactComponent as Sozlamalar} from "../../assets/icons/sozlamalar.svg";
import {ReactComponent as Home} from "../../assets/icons/home.svg";
import {ReactComponent as LogOut} from "../../assets/icons/logOut.svg";
import {ReactComponent as ArrowRight} from "../../assets/icons/angle-right-solid.svg";
import ArrowRightImg from "../../assets/icons/angle-right-solid.svg";
import Nav from "../../components/Nav";
import {act} from "@testing-library/react";
import UserAndNotification from "../../components/UserAndNotification";
import VazifalarVaChat from "../PageContent";
import PageContent from "../PageContent";
import ChatRoom from "../../components/ChatRoom";
import DirectorDashboard from "../../components/DirectorDashboard";


function MainPage() {

    const [navsInfo, setNavsInfo] = useState([
        {
            icon: <Dashboard/>,
            name: "Dashboard",
        }, {
            icon: <BarchaKurslar/>,
            name: "Barcha kurslar",
        }, {
            icon: <VazifalarVaChats/>,
            name: "Vazifalar va chat",
        }, {
            icon: <Qurilmalar/>,
            name: "Qurilmalar",
        }, {
            icon: <ZoomChat/>,
            name: "Zoom chat",
        }, {
            icon: <Sozlamalar/>,
            name: "Sozlamalar",
        },
    ])

    const [active, setActive] = useState(1)

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)


    return (
        <MainPageContainer>
            <NavbarCol isOpen={isNavbarOpen}>
                {/*<NavbarWrapper>*/}
                    <Logo>
                        <LogoSvg/>
                    </Logo>
                    <Navs>
                        {navsInfo.map(({icon, name}, index) =>
                            <Nav key={index}
                                 icon={icon}
                                 name={name}
                                 active={active === index}
                                 onClick={() =>
                                     setActive(index)
                                 }
                            />
                        )}
                    </Navs>
                    <Navs>
                        <Nav icon={<Home/>} name={"Home pdp.uz"}/>
                        <Nav icon={<LogOut/>} name={"Chiqish"}/>
                    </Navs>
                {/*</NavbarWrapper>*/}
            </NavbarCol>

            {/*<p><ArrowRight/></p>*/}

            <NavbarButton onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                          isNavbarOpen={isNavbarOpen}
            >
                <img src={ArrowRightImg} alt=">"/>
            </NavbarButton>
            <ContentCol>
                <UserAndNotification fullName={"Dilshod Mirsoatov"}/>
                <PageContent title={"vazifalar va chat"}>
                    <ChatRoom/>
                    {/*<DirectorDashboard/>*/}
                </PageContent>
            </ContentCol>


        </MainPageContainer>
    )
}

export default MainPage