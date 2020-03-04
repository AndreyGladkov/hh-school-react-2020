import React from "react";
import "./SocialMediaIcons.less";
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import vk from './facebook.svg';
import instagram from './twitter.svg';

export default function SocialMediaIcons(props) {
    return (
        <div className="social-media-icons-container">
            <div className="social-media-icons-container__item">
                <a href="#"><img className="social-media-icon"
                    src={facebook} alt="facebook.com" /></a>
            </div>
            <div className="social-media-icons-container__item">
                <a href="#"><img className="social-media-icon"
                    src={twitter} alt="twitter.com" /></a>
            </div>
            <div className="social-media-icons-container__item">
                <a href="#"><img className="social-media-icon"
                    src={vk} alt="vk.com" /></a>
            </div>
            <div className="social-media-icons-container__item">
                <a href="#"><img className="social-media-icon"
                    src={instagram}
                    alt="instagram.com" /></a>
            </div>
        </div>
    );
}