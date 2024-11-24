import { Flex } from "antd"
import { ParallaxBanner } from "react-scroll-parallax"
import styled from "styled-components"
import MediaButton from "./MediaButton"
import Countdown from "react-countdown"

export default function Release(props) {
    const Parent = styled.div `
    width: 500px;
    height: 100px;
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

    const UnlockOverlay = styled.div `
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background-color: rgba(0,0,0,0.5);
    `

    const Overlay = styled.div `
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    font-family: "Pixel Mix";
    font-size: 12px;
    color: white;
    text-shadow: 3px 3px 2px black;
    @media screen and (max-width: 900px) {
        font-size: 11px;
    }
    `

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div></div>
        } else {
          // Render a countdown
          return <span>
            {days !== 0 && `${days} days`} 
            {days === 0 && hours !== 0 `${hours} hours`} 
            {days === 0 && hours === 0 && minutes !== 0 && `${minutes} minutes`} 
            {days === 0 && hours === 0 && minutes === 0 && seconds !== 0 && `${seconds} seconds`}
        </span>
        }
      };

    return (
        <Parent>
            <ParallaxBanner
                style={{ height: "100px", width: "100%", borderRadius: "30px"}}
                layers={[
                    {image: `./assets/covers/${props.img}`, speed: -30}
                ]}
                >
                    {props.unlock !== undefined && Date.now() < parseInt(props.unlock.getTime())*1000 &&
                    <UnlockOverlay>
                        <Overlay>
                            This song will release in <Countdown date={props.unlock*1000} renderer={renderer} />
                        </Overlay>
                    </UnlockOverlay>
                    }
                    
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