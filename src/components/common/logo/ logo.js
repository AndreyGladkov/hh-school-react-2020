import React from "react";
import Link from "../../../content/footer/common/social/link/link";
import "./logo.less";

export default function Logo(props) {
    const url = props.url || "/";
    const src = props.src || "";
    const alt = props.alt || "";

    return (
        <Link url={url}>
            <img className="logo" src={src} alt={alt} />
        </Link>
    );
}