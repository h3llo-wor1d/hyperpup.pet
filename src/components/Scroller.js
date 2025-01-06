import styled, { keyframes } from "styled-components"

export default function Scroller(props) {

    const Scroll = keyframes `
    0% {transform: translate(0, 0);}
    100% {transform: translate(-100%, 0);}
    `

    const Marquee = styled.span `
        font-size: 30px;
        text-transform: uppercase;
        color: white;
        font-family: "VCR OSD";
        text-decoration:none;
        outline:none;
    `

    const Wrapper = styled.div `
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: hidden;
    
    & > ${Marquee} {
        white-space: nowrap;
        animation: ${Scroll} 5s linear infinite;
        max-width: none;
    }
    `

    
    return (
        <Wrapper>
            <Marquee>{props.text}</Marquee>
            <Marquee>{props.text}</Marquee>
            <Marquee>{props.text}</Marquee>
            <Marquee>{props.text}</Marquee>
        </Wrapper>
    )
}