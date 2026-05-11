import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderItem from "./components/HeaderItem";
import ContentItem from "./components/ContentItem";
import FooterItem from "./components/FooterItem";

const baseUrl = "https://dummyjson.com/posts/";

const HomePage = () => {
    const headerTextValue = "Cards";
    const [labels, setLabels] = useState(
        [
            /*
            { id: 1, cardTitle: "Title 1", cardText: "Description 1" },
            { id: 2, cardTitle: "Title 2", cardText: "Description 2" },
            { id: 3, cardTitle: "Title 3", cardText: "Description 3" }
            */
        ]
    );

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                const shuffled = [...res.data.posts]
                    .sort(() => 0.5 - Math.random()) // shuffle
                    .slice(0, 3); // take 100 unique items
                setLabels(shuffled);
            });
    }, []);

    return (
        <div className="container col-10">
            <HeaderItem headerText={headerTextValue} />
            <ContentItem setOfLabels={labels} />
            <FooterItem />
        </div>
    );
};

export default HomePage;