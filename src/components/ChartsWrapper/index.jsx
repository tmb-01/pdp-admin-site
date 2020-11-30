import React, {useState} from "react"
import {
    AllAmountFooter,
    AllMoneyAmount,
    ChartsWrapperStyled,
    LineGraphBox,
    LineGraphCol, MoneySingleToggleBox, MoneyToggleBox,
    MySelect,
    SemiCircleCol, SmallGreen
} from "./styles";
import {
    DisplayFlex,
    DisplayFlexSpaceBetween,
    LineType,
    P30px,
    SmallP, SubLineType,
    SubTitle,
    TitleOfTable
} from "../../styles/styles";
import DateWithIcon from "../DateWithIcon";

function ChartsWrapper() {

    const [activeMoney, setActiveMoney] = useState(2)


    const [padding,setPadding]=useState()


    return (
        <ChartsWrapperStyled>
            <LineGraphCol>

                <AllMoneyAmount>
                    <DisplayFlexSpaceBetween>
                        <TitleOfTable>
                            Umumiy tushum. <br/>
                            Barcha tiplar bo'yicha
                        </TitleOfTable>

                        <DisplayFlex>
                            <MySelect>
                                <option value="1">Real pul turi</option>
                                <option value="2">Real pul turi</option>
                                <option value="3">Real pul turi</option>
                            </MySelect>

                            <DateWithIcon date={"Sentyabr 2020"}/>

                        </DisplayFlex>

                    </DisplayFlexSpaceBetween>


                    <AllAmountFooter>
                        <div>

                            <MoneyToggleBox>

                                <MoneySingleToggleBox
                                    active={activeMoney === 1}
                                    onClick={() => setActiveMoney(1)}
                                >
                                    barchasi
                                </MoneySingleToggleBox>
                                <MoneySingleToggleBox
                                    active={activeMoney === 2}
                                    onClick={() => setActiveMoney(2)}
                                >
                                    real pul
                                </MoneySingleToggleBox>
                                <MoneySingleToggleBox
                                    active={activeMoney === 3}
                                    onClick={() => setActiveMoney(3)}
                                >
                                    noreal pul
                                </MoneySingleToggleBox>

                            </MoneyToggleBox>

                        </div>

                        <div>
                            <P30px>
                                450.000.000 UZS
                            </P30px>
                            <SubTitle>
                                <SmallP>
                                    This month:
                                </SmallP>
                                <SmallGreen>
                                    +12.000.000
                                </SmallGreen>
                            </SubTitle>
                        </div>

                    </AllAmountFooter>
                </AllMoneyAmount>

                <LineGraphBox>

                    <DisplayFlexSpaceBetween>
                        <TitleOfTable>
                            Tushumlar <br/>
                            kategoriyalar bo’yicha
                        </TitleOfTable>

                        <DisplayFlex>

                            <div>
                                <LineType color={"var(--green)"}>
                                    Real pul
                                </LineType>

                                <SubLineType>
                                    Payme, Yandex
                                </SubLineType>
                            </div>

                            <div>
                                <LineType color={"var(--yellow)"}>
                                    No Real pul
                                </LineType>
                                <SubLineType>
                                    Vaucher, Cashback
                                </SubLineType>
                            </div>

                            <DateWithIcon date={"Sentyabr 2020"}/>
                        </DisplayFlex>


                    </DisplayFlexSpaceBetween>

                </LineGraphBox>

            </LineGraphCol>
            <SemiCircleCol>

            </SemiCircleCol>
        </ChartsWrapperStyled>
    )
}

export default ChartsWrapper