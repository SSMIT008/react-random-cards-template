import React from "react";
import { Link } from "react-router-dom";

const footerCopyrightSign = "\u00A9"
const footerText = "All My Rights Reserved";
const footerYear = new Date().getFullYear();

function FooterItem() {
    return (
        <div>
            <p className='footer m-3'>{footerCopyrightSign} {footerText} {footerYear} - Link: <Link to="/">Click</Link></p>
        </div>
    );
};

export default FooterItem;