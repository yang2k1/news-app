import React, { useEffect, useState } from 'react';
import './mainContent.css';

const MainContent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchRSSData()
            .then(data => setPosts(data))
            .catch(error => console.log(error));
    }, []);

    const fetchRSSData = async () => {
        try {
            const response = await fetch('https://cdn.24h.com.vn/upload/rss/trangchu24h.rss');
            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

            const items = xmlDoc.getElementsByTagName('item');
            const parsedPosts = [];
            console.log(items)

            for (let i = 0; i < items.length; i++) {
                const item = items[i];

                const title = item.getElementsByTagName('title')[0].textContent;
                const link = item.getElementsByTagName('link')[0].textContent;
                const description = item.getElementsByTagName('description')[0].textContent;
                console.log(item.getElementsByTagName(''))

                const image =  extractImageURL(item.getElementsByTagName('description')[0].innerHTML);

                parsedPosts.push({ title, link, description,image });
            }

            const clusters = [];
            while (parsedPosts.length > 0) {
                clusters.push(parsedPosts.splice(0, 6));
            }

            return clusters;
        } catch (error) {
            throw new Error('Failed to fetch RSS data');
        }
    };

    const extractImageURL = (description) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(description, 'text/html');
        const imgElement = doc.querySelector('img');
        return imgElement && imgElement.src;
    };

    return (
        <main>
            <div>
                <ul id="main-posts">
                    {posts.map((cluster, clusterIndex) => (
                        <li className="post-home" key={clusterIndex}>
                            <ul className="post-categories">
                                <li className="post-category-first"><a href="https://www.24h.com.vn/tin-tuc-trong-ngay-c46.html">Tin tức trong ngày</a></li>
                                <li className="post-category"><a href="https://www.24h.com.vn/dich-covid-19-c62e6058.html">Tin tức COVID-19</a></li>
                                <li className="post-category"><a href="https://www.24h.com.vn/tong-hop-so-lieu-dich-covid-19-c972.html">Số liệu COVID-19</a></li>
                            </ul>
                            <div>
                                <div className="post-title">
                                    <h3><a href={cluster[0].link}>{cluster[0].title}</a></h3>
                                </div>
                                <div className="post-content">
                                    {cluster[0].image && <img src={cluster[0].image} alt={cluster[0].title} />}
                                    <div className="post-content-right">
                                        <p>{cluster[0].description}</p>
                                        <a href="https://www.24h.com.vn/tin-nong-c46e3908.html" className="post-tag">Tin nóng</a>
                                    </div>
                                </div>
                                <ul className="related-posts">
                                    {cluster.slice(1).map((post, postIndex) => (
                                        <li key={postIndex}>
                                            <a href={post.link}>{post.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default MainContent;
