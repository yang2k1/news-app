import React from 'react';
import './newsSummary.css';
const NewsSummary = ({ title, link, pubDate, description, image }) => {
    return (
        <div className="news-item">
            {image && <img className="news-item-image" src={image} alt={title} />}
            <div className="news-item-content">
                <h3 className="news-item-title">
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                </h3>
                <p className="news-item-date">{pubDate}</p>
                <p className="news-item-description">{description}</p>
            </div>
        </div>
    );
};

export default NewsSummary;
