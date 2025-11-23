import styled from "styled-components";
import CountdownTimer from "../components/countdowntimer";

export default function WhoAmI() {
    const LayoutContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 30pt;
    user-select: none;
    `
    return (
        <LayoutContent>
            This experience will unlock in
            <CountdownTimer targetTimestampMs={1764046800} />
        </LayoutContent>
        
    )
}