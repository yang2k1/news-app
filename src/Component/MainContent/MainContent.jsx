import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import NewsItem from "./NewsItem";

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const RSS_FEED_URL = 'https://cdn.24h.com.vn/upload/rss/bongda.rss';


const MainContent = () => {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const parser = new Parser();
            try {
                const feed = await parser.parseURL(CORS_PROXY + RSS_FEED_URL);
                setNewsItems(feed.items);
            } catch (error) {
                console.error('Failed to fetch RSS feed:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="main-content">
            <h2>Tin tức mới nhất</h2>
            <div className="news-list">
                {newsItems.map((item) => (
                    <NewsItem
                        key={item.link}
                        title={item.title}
                        link={item.link}
                        pubDate={item.pubDate}
                        description={item.contentSnippet}
                        // image={item.img?.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainContent;
