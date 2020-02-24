import React from "react";
import facebookImage from './icon-fb.svg';
import twitterImage from './icon-tw.svg';
import vkImage from './icon-vk.svg';
import instagramImage from './icon-inst.svg';

const Social = () => {
    const socialsStore = [
        {
            urlResource: "https://ru-ru.facebook.com/",
            image: facebookImage,
            alt: "facebook"
        },
        {
            urlResource: "https://twitter.com/?lang=ru",
            image: twitterImage,
            alt: "twitter"
        },
        {
            urlResource: "https://vk.com/",
            image: vkImage,
            alt: "vk"
        },
        {
            urlResource: "https://www.instagram.com/",
            image: instagramImage,
            alt: "instagram"
        }
    ];

    return socialsStore.map((item, index) => (
            <a key={index} href={item.urlResource} className="social__link">
                <img src={item.image} alt={item.alt} />
            </a>
        )
    )
}
export default Social;
