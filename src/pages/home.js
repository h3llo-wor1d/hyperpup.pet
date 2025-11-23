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
    `

    useEffect(() => {
        document.title = "when am i?"
    }, [])
    
    return (
        <div style={{height: "100vh", position: "relative"}}>
            <LayoutContent>
                <Player src={whenami} />
            </LayoutContent>
        </div>
    )
}