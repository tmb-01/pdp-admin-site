import React from "react"
import {
    Changes,
    ChangesDurationWrapper, Duration,
    NameIconWrapper,
    NameOfStatistic, StatisticsInNumbers,
    StatisticsNumberDurationWrapper,
    StatisticsOfStudentsBoxStyled
} from "./styles";

import Calendar from "../../assets/icons/calendar.svg"
import {IconOfCalendar} from "../../styles/styles";

function StatisticsOfStudentsBox({name, number, changes, duration, customColor}) {
    return(
        <StatisticsOfStudentsBoxStyled>
            <NameIconWrapper>
                <NameOfStatistic>
                    {name} <br/>
                    talabalar soni

                </NameOfStatistic>
                <IconOfCalendar/>
            </NameIconWrapper>
            <StatisticsNumberDurationWrapper>
                <StatisticsInNumbers customColor={customColor}>
                    {number}
                </StatisticsInNumbers>
                <ChangesDurationWrapper>
                    <Changes customColor={customColor}>
                        {changes} ta
                    </Changes>
                    <Duration>{duration}</Duration>
                </ChangesDurationWrapper>
            </StatisticsNumberDurationWrapper>

        </StatisticsOfStudentsBoxStyled>
    )
}

export default StatisticsOfStudentsBox