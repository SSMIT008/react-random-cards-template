import React from "react";

const HeaderItem = (props) => {
    return (
        <div>
            <h2 className='header m-3'>{props.headerText}</h2>
        </div>
    );
};

export default HeaderItem;