import { Flex } from "antd"
import styled from "styled-components"

export default function TourDate(props) {
    const Parent = styled.div `
        background-color: #1c1c1c;
        width: 500px;
        border-radius: 25px;
        @media screen and (max-width: 900px) {
            font-size: 12px;
        }
        
    `

    const Location = styled.span `
        
    `

    const Timing = styled.span `
        font-family: "Thaleah Fat";
        font-size: 25px;
        @media screen and (max-width: 900px) {
            font-size: 20px;
        }
    `

    const Icon = styled.img `
        filter: invert(1);
    `
    
    return (
        <Parent>
            <Flex align="center" gap="15px" style={{padding: "20px"}}>
                <Icon src={props.image} alt="logo" height="45px"/>
                <div>
                    <Timing>
                        {props.date} @ {props.time}
                    </Timing> <br/>
                    <Location>
                        {props.location} {"~"} {props.sublocation}
                    </Location>
                </div>
            </Flex>
        </Parent>
    )
}