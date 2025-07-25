import { Flex } from "antd";
import MediaButton from "../components/MediaButton";

export default function Footer() {
    return (
        <div style={{padding: "30px"}}>
            <Flex justify="center" gap="15px">
                <MediaButton 
                    platform={"Bluesky"}
                    href={"https://bsky.app/profile/hyperpup.pet"}
                    height={"25px"}
                />
                <MediaButton 
                    platform={"Twitter"}
                    href={"https://www.x.com/hyp3rpup/"}
                    height={"25px"}
                />
                <MediaButton 
                    platform={"Instagram"}
                    href={"https://www.instagram.com/hyperpup.pet/"}
                    height={"25px"}
                />
                <MediaButton 
                    platform={"Discord"}
                    href={"https://discord.gg/q97bRGsr7c"}
                    height={"25px"}
                />
                
                <MediaButton 
                    platform={"Apple"}
                    href={"https://music.apple.com/us/artist/hyperpup/1740211647"}
                    height={"25px"}
                />
                <MediaButton 
                    platform={"YoutubeMusic"}
                    href={"https://www.youtube.com/channel/UC7k0CS7qUUriW-SQa8pMcvQ"}
                    height={"25px"}
                />
                <MediaButton 
                    platform={"Spotify"}
                    href={"https://open.spotify.com/artist/2KYbArEPLKH4MpXX2eDjk2"}
                    height={"25px"}
                />
                
            </Flex>
            <div style={{textAlign: "center", fontSize: "8pt", marginTop: "6px"}}>
                Copyright Alienfish 2024. This website was made from scratch in <br/>
                ReactJS and is hosted by AWS Amplify.
            </div>
        </div>
        
    )      
}
