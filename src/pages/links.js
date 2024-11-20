import { Flex } from "antd";
import styled from "styled-components";
import SocialButton from "../components/SocialButton";


const Profile = styled.div `
height: 150px;
width: 150px;
background-color: #dadada;
text-align: center;
border-radius: 500px;
overflow: hidden;
`

const Header = styled.div `
display: block;
text-align: center;
font-family: Silkscreen Regular;
font-size: 30pt;
`
export default function Links() {
    return (
        <div>
            <Flex justify={"center"}>
                <Profile>
                    <img src={"./assets/pfp.png"} alt="pfp" height="150px"/>
                </Profile>
                
            </Flex>
            <Header>
                HYPERPUP
            </Header><br/>
            <Flex justify={"center"} align={"center"} vertical gap={"30px"}>
                <SocialButton />
                <SocialButton />
            </Flex>
        </div>
    )
}