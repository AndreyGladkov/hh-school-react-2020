import React from "react";
import appleImage from './icon-appstore.svg';
import googleImage from './icon-googleplay.svg';

const appStore = [
    {
        urlResource: "https://www.apple.com/ru/",
        image: appleImage,
        alt: "app store"
    },
    {
        urlResource: "https://play.google.com/store",
        image: googleImage,
        alt: "google play"
    }
];

const App = () => {
    return appStore.map((item, index) => (
            <a key={index} href={item.urlResource} className="apps__link">
                    <img src={item.image} alt={item.alt} />
            </a>
        )
    )
}
export default App;
