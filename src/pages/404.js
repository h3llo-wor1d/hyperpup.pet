import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            Page not found!<br/>
            Sorry there's no furry porn here, i got lazy.<br/>
            <br/>
            <Link to="/">Back to home</Link>
        </div>
    )
}