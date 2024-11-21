import { Flex } from "antd"
import { ParallaxBanner } from "react-scroll-parallax"
import styled from "styled-components"
import MediaButton from "./MediaButton"

export default function Release(props) {
    const Parent = styled.div `
    width: 500px;
    `
    const Child = styled.div `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-family: "Thaleah Fat";
    font-size: 25px;
    color: white;
    text-shadow: 3px 3px 2px black;
    padding: 20px;
    @media screen and (max-width: 900px) {
        font-size: 20px;
    }
    `
    return (
        <Parent>
            <ParallaxBanner
                style={{ height: "100px", width: "100%", borderRadius: "30px"}}
                layers={[
                    {image: `./assets/covers/${props.img}`, speed: -30}
                ]}
                >
                    <Child>
                        {props.name}<br/>
                        <Flex gap="10px" style={{marginTop: "4px"}}>
                            {props.links && props.links.map(link => 
                                <MediaButton 
                                    platform={link.platform}
                                    href={link.href}
                                />
                            )}
                        </Flex>
                    </Child>
                </ParallaxBanner>
        </Parent>
    )
}