import { Flex } from "antd";
import styled from "styled-components";
import SocialButton from "../components/SocialButton";


const Profile = styled.div `
height: 150px;
width: 150px;
background-color: #6DAE77;
text-align: center;
border-radius: 500px;
overflow: hidden;
`

const Header = styled.div `
display: block;
text-align: center;
font-family: Silkscreen Regular;
font-size: 30pt;
margin-bottom: 15px;
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
            </Header>
            <Flex justify={"center"} align={"center"} vertical gap={"15px"}>
                Yapping
                <SocialButton 
                    name="Bluesky"
                    url="https://bsky.app/profile/hyperpup.pet"
                    color="#0D85FE"
                />
                <SocialButton 
                    name="Discord"
                    url="https://discord.gg/FUuvFfwkCz"
                    color="#5865F2"
                />
                <br/>
                Listen To My Shit
                <SocialButton 
                    name="Apple Music" 
                    url="https://music.apple.com/us/artist/hyperpup/1740211647" 
                    color="#FA233B" 
                />
                <SocialButton 
                    name="SoundCloud" 
                    url="https://soundcloud.com/h3llo_wor1d" 
                    color="#ff5500" 
                />
                <SocialButton 
                    name="Spotify" 
                    url="https://open.spotify.com/artist/2KYbArEPLKH4MpXX2eDjk2" 
                    color="#1ED760" 
                />
            </Flex>
        </div>
    )
}