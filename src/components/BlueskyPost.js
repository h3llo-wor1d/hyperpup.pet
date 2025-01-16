import styled from "styled-components"
import BlueSky from '../svg/bluesky.svg';

function relativeTime(previous) {

    var current = Date.now()

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        let day = Math.round(elapsed/msPerDay);
        return day + (day > 1 ? " days ago" : " day ago");
    }

    else if (elapsed < msPerYear) {
        let month = Math.round(elapsed/msPerMonth);
        return month + (month > 1 ? " months ago" : " month ago");
    }

    else {
        let year = Math.round(elapsed/msPerYear);
        return year + (year > 1 ? " years ago" : " year ago");; 
    }
}

export default function BlueskyPost(props) {
    const Parent = styled.div `
    padding: 20px;
    background-color: rgba(40,40,40,1);
    border-radius: 20px;
    flex: 0 0 calc(33.3333% - 55px);
    `

    const BlueSkyIcon = styled.img `
    height: 16px;
    `
    
    const PostHeader = styled.div `
    display: flex;
    align-items: center;
    column-gap: 10px;
    `

    const Avatar = styled.img `
    width: 30px;
    border-radius: 200px;
    `

    const PostHeaderParent = styled.div `
    display: flex; 
    justify-content: space-between;
    align-items: start;
    `

    return (
        <Parent>
            <PostHeaderParent>
                <br/>
                <PostHeader>
                    <span>{relativeTime(new Date(props.data.post.record.createdAt))}</span>
                </PostHeader>
            </PostHeaderParent>
            {props.data.post.record.text.split("\n").map(i => <div>{i}</div>)}
        </Parent>
    )
}