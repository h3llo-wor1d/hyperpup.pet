import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
    const Container = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("./assets/porn.jpg");
    background-size: 100% auto;
    filter: blur(8px);
    z-index: 1;
    `
    const Parent = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    `

    const Child = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    `
    return (
        <div>
            <a href="https://e621.net/posts/5232921" target="_blank" rel="noreferrer"><Container /></a>
            <Parent>
            <img src="./assets/cumpizza.jpg" alt="cumpizza" height="300px"/>
            <Child>
                <div>
                    Sorry, I got distracted eating the cum pizza...<br/>
                    This page doesn't exist yet.<br/>
                    <br/>
                    <div style={{textAlign: "center"}}>
                    <Link to="/">Back to home</Link>
                    </div>
                </div>
            </Child>
        </Parent>
        </div>
        
    )
}