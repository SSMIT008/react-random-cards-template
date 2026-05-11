import React from "react";

const arrayItems = ["item1", "item2", "item3", "item4", "item5", "item6"];
const getRandom = () => {
    return Math.floor(Math.random() * 10);
}

const ContentItem = () => {
    return (
        <div>
            <ul>
                <li>{arrayItems[0]}</li>
                <li>{arrayItems[1]}</li>
                <li>{arrayItems[2]}</li>
            </ul>
            <ul>
                {
                    arrayItems.map(item => (<li key={`item-${item}`}>{item}</li>))
                }
            </ul>
            <ul>
                {
                    Array.from({ length: 8 }, (item = getRandom(), index) =>
                        <li key={`item-index3-${index}`}>{`Element ${item} is ${item % 2 === 0 ? `EVEN` : `ODD`}`}</li>)
                }
            </ul>

            {/*
            const h1Element = document.createElement("h1");
            h1Element.innerText = "Hello World!";
            const root2 = document.getElementById("root2");
            root2.append(h1Element);
            */}
        </div >
    );
};

export default ContentItem;