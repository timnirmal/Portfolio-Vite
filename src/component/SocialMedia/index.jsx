import {Link} from "react-router-dom";
import {me} from "../../data";

import iconGitHub from "/images/icon _github.png";
import iconLinkedIn from "/images/icon _linkedin.png";
import iconTwitter from "/images/icon _twitter.png";
import iconFacebook from "/images/icon _facebook.png";
import iconEmail from "/images/icon _email.png";

import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {AiFillMail as FaEmail} from "react-icons/ai"
import SMIcon from "./SMIcon.jsx";

function SocialMedia() {

    return (
        <div className="social-media p-8">
            {me.social.github && (
                <SMIcon url={me.social.github.url}>
                    <FaGithub/>
                </SMIcon>
            )}
            {me.social.linkedin && (
                <SMIcon url={me.social.linkedin.url}>
                    <FaLinkedin/>
                </SMIcon>
            )}
            {me.social.twitter && (
                <SMIcon url={me.social.twitter.url}>
                    <FaTwitter/>
                </SMIcon>
            )}
            {me.social.facebook && (
                <SMIcon url={me.social.facebook.url}>
                    <FaFacebook/>
                </SMIcon>
            )}
            {me.email && (
                <SMIcon url={`mailto:${me.email}`}>
                    <FaEmail/>
                </SMIcon>
            )}

        </div>
    )
}

export default SocialMedia;