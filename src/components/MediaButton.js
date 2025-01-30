import styled from 'styled-components';
import Spotify from '../svg/spotify.svg';
import Soundcloud from '../svg/soundcloud.svg';
import Apple from '../svg/applemusic.svg';
import Bluesky from '../svg/bluesky.svg';
import Discord from '../svg/discord.svg';
import YoutubeMusic from '../svg/ytmusic.svg';
import SVG from "react-inlinesvg";

const MediaMap = {
    Spotify: Spotify,
    Soundcloud: Soundcloud,
    Apple: Apple,
    Bluesky: Bluesky,
    "Discord" : Discord,
    YoutubeMusic: YoutubeMusic
}

const HoverColors = {
    Apple: "#FA233B",
    YoutubeMusic: "#FF0033",
    Spotify: "#1ED760",
    Bluesky: "#0D85FE",
    Soundcloud: "#ff5500",
    Discord: "#5865F2"
}

export default function MediaButton(props) {

    const Platform = styled.div `
        -webkit-filter: drop-shadow(2px 2px 2px #000);
        filter: drop-shadow(2px 2px 2px #000);
    `

    const Platform2 = styled(SVG) `
    height: ${props.height !== undefined ? props.height : "25px"};
    width: ${props.height !== undefined ? props.height : "25px"};
    & path {
    transition: 0.10s all linear;
    }
    &:hover {
        path {
            fill: ${HoverColors[props.platform]};
        }
    }
    `

    const Button = styled.div `
        ${props.href && 
            `&:hover {
                cursor: pointer;
            }
        `}
    `

    const handler = () => {
        if (props.href !== undefined && props.href !== false) {
            window.open(props.href, "_blank");
        }
    }

    return (
        <Button onClick={handler}>
            <Platform>
                <Platform2 src={MediaMap[props.platform]}  alt={props.platform} />
            </Platform> 
        </Button>
    )
}