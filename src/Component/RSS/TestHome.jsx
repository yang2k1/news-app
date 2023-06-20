import React, { useEffect, useState } from 'react';

function TestHome() {
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

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const title = item.getElementsByTagName('title')[0].textContent;
                const link = item.getElementsByTagName('link')[0].textContent;
                const description = item.getElementsByTagName('description')[0].textContent;
                const image = extractImageURL(description);

                parsedPosts.push({ title, link, image });
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
        const regex = /<img[^>]+src=['"]([^'"]+)['"]/g;
        const matches = regex.exec(description);
        return matches && matches[1];
    };

    return (
        <div>
            {posts.map((cluster, clusterIndex) => (
                <div key={clusterIndex}>
                    {cluster[0].image && <img src={cluster[0].image} alt={cluster[0].title} />}
                    <h3>{cluster[0].title}</h3>

                    <ul className="related-posts">
                        {cluster.slice(1).map((post, postIndex) => (
                            <li key={postIndex}>
                                <a href={post.link}>{post.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TestHome;
