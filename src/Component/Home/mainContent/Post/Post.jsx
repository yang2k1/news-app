import React, { useEffect, useState } from 'react';
import NewsSummary from './NewsSummary';
import Parser from "rss-parser";


const Post = () => {
    const [newsData, setNewsData] = useState([]);
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const RSS_FEED_URL = 'https://cdn.24h.com.vn/upload/rss/oto.rss';
    useEffect(() => {

        const fetchData = async () => {
            const parser = new Parser();
            try {
                const feed = await parser.parseURL(CORS_PROXY + RSS_FEED_URL);
                setNewsData(feed.items);
            } catch (error) {
                console.error('Failed to fetch RSS feed:', error);
            }
        };

        fetchData();
    }, []);
    const getImageUrlFromDescription = (description) => {
        const html = document.createElement('div');
        html.innerHTML = description;
        const imgElement = html.querySelector('img');
        return imgElement ? imgElement.getAttribute('src') : null;
    };
    return (
        <div className="home">
            <h2 className="section-title">Tin tức mới nhất</h2>
            <div className="news-list">
                {newsData.map((item) => (
                    <NewsSummary
                        key={item.link}
                        title={item.title}
                        link={item.link}
                        pubDate={item.pubDate}
                        description={item.contentSnippet}
                        image={getImageUrlFromDescription(item.content)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Post;
