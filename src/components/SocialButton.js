import styled from "styled-components"
import Bluesky from '../svg/bluesky.svg';
import { Flex } from "antd";

const Parent = styled.div `
width: 500px;
max-width: 85%;
background-color: #1c1c1c;
padding: 25px;
border-radius: 20px;
`

const Child = styled.div `
width: fit-content;
`

export default function SocialButton(props) {
    return (
        <Parent>
            <Flex justify="center">
                <Child>
                    <img src={Bluesky} alt="Bluesky Logo" height="40px" style={{"verticalAlign": "middle", marginRight: "15px"}} />
                    <span style={{"fontSize": "15pt"}}>Bluesky</span>
                </Child>
            </Flex>   
        </Parent>
    )
}