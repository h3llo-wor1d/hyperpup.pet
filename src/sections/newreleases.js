import { ParallaxBanner } from "react-scroll-parallax"
import styled from "styled-components"
import { Flex } from "antd"
import Release from "../components/Release"

export default function NewReleases(props) {

    const Parent = styled.div `
    width: calc(100vw - 40px);
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    `

    const Header = styled.div `
    width: 100%;
    overflow: hidden;
    text-wrap: nowrap;
    height: 20px;
    font-size: 20px;
    font-family: Pixel Mix;
    @media screen and (max-width: 900px) {
        font-size: 15px;
    } 
    `

    const Container = styled.div `
    margin-top: 20px;
    height: 400px;
    overflow: auto;
    `

    const Child = styled.div `
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    height: inherit;
    z-index: 100;
    `
    return (
        <Parent>
            <Header>
                {Array(25).fill(0).map(i => "New Releases ")}
            </Header>
            <Container>
                <ParallaxBanner
                // todo: click on this and get a popup warning for furry porn and then send to the source for the bg image
                style={{ height: "inherit", width: "100%"}}
                layers={[
                    {image: "./assets/yaoi.png", speed: -20}
                    // CAUTION!!! SOURCE IS NSFW https://e621.net/posts/4356911
                ]}
                >
                    <Child>
                        <Flex align="center" justify="center" gap="30px" style={{"overflowX": "auto", padding: "20px"}} wrap>
                            <Release 
                                img="pounce.png" 
                                name="POUNCE TO IT (w/BUGCORE)"
                                links={[
                                    {
                                        platform: "Apple",
                                        href: false
                                    },
                                    {
                                        platform: "Spotify",
                                        href: false //placeholder
                                    }
                                ]}
                                unlock={new Date(1732860000)}
                            />
                            <Release 
                            img="tail.png" 
                            name="MILK IN DA BOWL"
                            links={[
                                {
                                    platform: "Apple",
                                    href: "https://music.apple.com/us/album/milk-in-da-bowl-%CF%89/1780119121?i=1780119122"
                                },
                                {
                                    platform: "Spotify",
                                    href: "https://open.spotify.com/album/5Q9i4ENrtaheEukByK12er" //placeholder
                                }
                            ]}
                            unlock={new Date(1732255200)}
                            />
                            <Release 
                            img="bugz.png" 
                            name="BUGZINYRSKIN"
                            links={[
                                {
                                    platform: "Apple",
                                    href: "https://music.apple.com/us/album/bugzinyrskin/1771331001"
                                },
                                {
                                    platform: "Spotify",
                                    href: "https://open.spotify.com/album/3lekCd1FbVNZ31F7YeiLjz"
                                }
                            ]}
                            />
                            <Release 
                            img="mine.png" 
                            name="You're Mine (w/Awerewa)"
                            links={[
                                {
                                    platform: "Apple",
                                    href: "https://music.apple.com/us/album/youre-mine-feat-hatsune-miku-awerewa/1757723149"
                                },
                                {
                                    platform: "Spotify",
                                    href: "https://open.spotify.com/album/4tHLqHH37QeahOvyorVqQA?si=A7tiyXW6R5yLxUbjpMnrBg"
                                }
                            ]}
                            />
                        </Flex>
                        
                    </Child>
                    
                </ParallaxBanner>
            </Container>
        </Parent>
    )
}