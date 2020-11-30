import React, {useState} from "react"
import StatisticsOfStudentsBox from "../StatisticsOfStudentsBox";
import {AllStatisticsWrapper, DirectorDashboardStyled} from "./styles";
import ChartsWrapper from "../ChartsWrapper";

function DirectorDashboard() {

    const [statInfo, setStatInfo] = useState([
        {
            name: "Ro’yxatdan o’tgan",
            number: 620,
            changes: "+5",
            duration: "in this month",
            color: "black"
        }, {
            name: "Aktiv",
            number: 120,
            changes: "+34",
            duration: "in this month",
            color: "var(--green)"
        }, {
            name: "Bitirgan",
            number: 120,
            changes: "+34",
            duration: "in this month",
            color: "var(--yellow)"
        }, {
            name: "To’xtab qolgan",
            number: 20,
            changes: "+14",
            duration: "in this month",
            color: "var(--red)"
        },
    ])

    return (
        <DirectorDashboardStyled>
            <AllStatisticsWrapper>
                {/*<StatisticsOfStudentsBox/>*/}

                {statInfo.map(({name, number, changes, duration, color}, index) =>
                    <StatisticsOfStudentsBox key={index}
                                             name={name}
                                             number={number}
                                             changes={changes}
                                             duration={duration}
                                             customColor={color}
                    />
                )}
            </AllStatisticsWrapper>

            <ChartsWrapper/>

        </DirectorDashboardStyled>
    )
}

export default DirectorDashboard