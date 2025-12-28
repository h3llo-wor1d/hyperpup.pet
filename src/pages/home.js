import styled from "styled-components"
import Player from "../components/player";
import whenami from '../arg/whenami.json';
import { useEffect } from "react";

export default function Home() {
    const LayoutContent = styled.div `
    width: 95%;
    text-align: center;
    height: fit-content;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25pt;
    user-select: none;
    align-items: center;
    `

    const VideoContainer = styled.div `
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
    }
    `

    const ContainerContainer = styled.div `
    max-width: 800px;
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    `

    useEffect(() => {
        document.title = "keres wolfe"
    }, [])
    
    return (
        <div style={{height: "100vh", position: "relative"}}>
            <LayoutContent>
                <ContainerContainer>
                    <VideoContainer>
                    <iframe src="https://www.youtube.com/embed/58TZEEG1brs?si=lSDLbOOo9A2CHYa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </VideoContainer>
                </ContainerContainer>
                
                
                <Player src={whenami} />
            </LayoutContent>
        </div>
    )
}