import React, { useEffect, useState } from "react";

const ContentItem = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Value ${count}`
    });
    return (
        <div className="container col-10 w-100">
            <h1>{count}</h1>
            <button className="btn btn-warning me-2" onClick={() => setCount(count + 1)}>Click</button>
            <button className="btn btn-light" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default ContentItem;