import React from "react";

const ContentItem = ({ setOfLabels }) => {
    return (
        <div>
            {setOfLabels.map((item, index) => (
                <div key={item.id} className="card text-bg-secondary border-dark mb-3">
                    <img src={`https://picsum.photos/${400 + index}/200`} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContentItem;