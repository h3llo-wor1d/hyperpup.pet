import styled from "styled-components"
import Bluesky from '../svg/bluesky.svg';
import Spotify from '../svg/spotify.svg';
import Soundcloud from '../svg/soundcloud.svg';
import Apple from '../svg/applemusic.svg';
import YoutubeMusic from '../svg/ytmusic.svg';
import Discord from '../svg/discord.svg';

import { Flex } from "antd";

const Child = styled.div `
width: fit-content;
display: flex;
align-items: center;
user-select: none;
-webkit-user-select: none
`

const IconMap = {
    "Bluesky" : Bluesky,
    "Spotify" : Spotify,
    "SoundCloud" : Soundcloud,
    "Apple Music" : Apple,
    "Discord" : Discord,
    "Youtube Music": YoutubeMusic
}

export default function SocialButton(props) {

    const Parent = styled.div `
        width: 500px;
        max-width: 85%;
        background-color: #1c1c1c;
        padding: 25px;
        border-radius: 20px;
        user-select: none;
        transition: background-color .40s;

        &:hover {
            cursor: pointer;
            background-color: ${props.color}
        }
    `

    const handler = () => {
        if (props.url !== undefined) {
            window.open(props.url, "_blank");
        }
    }

    return (
        <Parent onClick={handler}>
            <Flex justify="center">
                <Child>
                    <img src={IconMap[props.name]} alt={`${props.name} logo`} height="40px" style={{marginRight: "15px"}} />
                    <span style={{"fontSize": "20pt", fontWeight: "500"}}>{props.name && props.name}</span>
                </Child>
            </Flex>   
        </Parent>
    )
}