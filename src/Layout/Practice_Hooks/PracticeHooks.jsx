import React from "react";
import HeaderItem from "./components/HeaderItem";
import ContentItem from "./components/ContentItem";
import FooterItem from "./components/FooterItem";

const PracticeHooks = () => {
    const headerTextValue = "PracticeHooks";
    return (
        <div className="container col-10">
            <HeaderItem headerText={headerTextValue} />
            <ContentItem />
            <FooterItem />
        </div>
    );
};

export default PracticeHooks;