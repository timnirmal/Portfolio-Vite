import {Link} from "react-router-dom";
import {me} from "../../data";

function SocialMedia() {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <ul>
                    <Link to={me.social.github} target="_blank">Github</Link>
                </ul>
            </div>
            <div className="navbar__resume">
                {null}
            </div>
        </nav>
    )
}

export default SocialMedia;