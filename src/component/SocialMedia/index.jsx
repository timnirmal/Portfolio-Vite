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

function SocialMedia() {
    console.log(me.social.github.url)

    return (
        <div className="social-media">
            {me.social.github && (
                <a href={me.social.github.url} target="_blank" rel="noreferrer"
                   className="inline-block"
                >
                    <FaGithub className="text-5xl"/>
                </a>
            )}
            {me.social.linkedin && (
                <a href={me.social.linkedin.url} target="_blank" rel="noreferrer" className="inline-block">
                    <FaLinkedin className="text-5xl"/>
                </a>
            )}
            {me.social.twitter && (
                <a href={me.social.twitter.url} target="_blank" rel="noreferrer" className="inline-block">
                    <FaTwitter className="text-5xl"/>
                </a>
            )}
            {me.social.facebook && (
                <a href={me.social.facebook.url} target="_blank" rel="noreferrer" className="inline-block">
                    <FaFacebook className="text-5xl"/>
                </a>
            )}
            {me.email && (
                <a href={`mailto:${me.email}`} target="_blank" rel="noreferrer" className="inline-block">
                    <FaEmail className="text-5xl"/>
                </a>
            )}

        </div>
    )
}

export default SocialMedia;