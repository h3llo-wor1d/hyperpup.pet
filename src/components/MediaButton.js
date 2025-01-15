import styled from 'styled-components';
import Spotify from '../svg/spotify.svg';
import Soundcloud from '../svg/soundcloud.svg';
import Apple from '../svg/applemusic.svg';
import Bluesky from '../svg/bluesky.svg';
import Discord from '../svg/discord.svg';
import YoutubeMusic from '../svg/ytmusic.svg';

const MediaMap = {
    Spotify: Spotify,
    Soundcloud: Soundcloud,
    Apple: Apple,
    Bluesky: Bluesky,
    "Discord" : Discord,
    YoutubeMusic: YoutubeMusic
}

export default function MediaButton(props) {

    const Platform = styled.img `
        -webkit-filter: drop-shadow(2px 2px 2px #000);
        filter: drop-shadow(2px 2px 2px #000);
    `

    const Button = styled.div `
        ${props.href && 
            `&:hover {
                opacity: .75;
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
            <Platform src={MediaMap[props.platform]} height={props.height !== undefined ? props.height : "25px"} alt={props.platform} />
        </Button>
    )
}