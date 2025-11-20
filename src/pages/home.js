import styled from "styled-components"

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
    return (
        <div style={{position: "relative", height: "100vh"}}>
            <LayoutContent>
            ... try another time?
            </LayoutContent>
        </div>
    )
}