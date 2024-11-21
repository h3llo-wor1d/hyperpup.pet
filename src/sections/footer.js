import { Flex } from "antd";
import MediaButton from "../components/MediaButton";

export default function Footer() {
    return (
        <div style={{padding: "30px"}}>
            <Flex justify="center" gap="15px">
                <MediaButton 
                    platform={"Bluesky"}
                    href={"https://bsky.app/profile/hyperpup.pet"}
                    height={"20px"}
                />
                <MediaButton 
                    platform={"Discord"}
                    href={"https://discord.gg/FUuvFfwkCz"}
                    height={"20px"}
                />
                <MediaButton 
                    platform={"Apple"}
                    href={"https://music.apple.com/us/artist/hyperpup/1740211647"}
                    height={"20px"}
                />
                <MediaButton 
                    platform={"Spotify"}
                    href={"https://open.spotify.com/artist/2KYbArEPLKH4MpXX2eDjk2"}
                    height={"20px"}
                />
                
            </Flex>
            <div style={{textAlign: "center", fontSize: "8pt", marginTop: "6px"}}>
                Copyright Alienfish 2024. This website was made from scratch 
                <br/>in ReactJS and is hosted by AWS Amplify.
            </div>
        </div>
        
    )      
}