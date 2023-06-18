import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import './home.css'; // Import file CSS cho Home component

const Home = () => {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const parser = new Parser();
            const feed = await parser.parseURL('https://cdn.24h.com.vn/upload/rss/bongda.rss'); // Thay thế bằng URL của RSS feed thực tế

            // Lấy danh sách tin tức từ feed
            if (feed && feed.items) {
                setNewsItems(feed.items.slice(0, 3)); // Lấy 3 tin tức đầu tiên
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home">
            <h2>Tin tức trong ngày</h2>
            {newsItems.map((item, index) => (
                <div className="category" key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.contentSnippet}</p>
                    {/*<img src={item.enclosure?.url} alt={item.title} />*/}
                </div>
            ))}
        </div>
    );
};

export default Home;
