import React from "react"
import {DateBesideCalendarIcon, DisplayFlex, IconOfCalendar} from "../../styles/styles";

function DateWithIcon({date}) {
    return (
        <DisplayFlex>
            <DateBesideCalendarIcon>
                {date}
            </DateBesideCalendarIcon>
            <IconOfCalendar/>
        </DisplayFlex>

    )
}

export default DateWithIcon