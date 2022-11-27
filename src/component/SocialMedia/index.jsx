import {Link} from "react-router-dom";
import {me} from "../../data";

import iconGitHub from "/images/icon _github.png";
import iconLinkedIn from "/images/icon _linkedin.png";
import iconTwitter from "/images/icon _twitter.png";
import iconFacebook from "/images/icon _facebook.png";
import iconEmail from "/images/icon _email.png";


function SocialMedia() {
    console.log(me.social.github.url)

    return (
        <div className="social-media">
            <h1>social media</h1>
            <ul>
                {me.social.github && (
                    <li>
                        <Link to={me.social.github}>
                            <img
                                src={iconGitHub}
                                alt="Image Link"
                                width="50px"
                            />
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SocialMedia;