import React, { useEffect, useState } from 'react';
import RssService from '../RSS/RssService';

const NewsDetail = ({ rssLink }) => {
    const [rssData, setRssData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await RssService.fetchRssData(rssLink);
                setRssData(data);
            } catch (error) {
                console.error('Error fetching RSS data:', error);
            }
        };

        fetchData();
    }, [rssLink]);

    return (
        <main>
            <div>

                    <li style={{listStyle: 'none', width: '600px', marginTop: '50px'}} className="post-sum">
            {rssData.map((item, index) => (
                <div className="post-title-detail" key={index} style={{ width: '600px'}}>
                    {/*{item.image && <img src={item.image} alt={item.title} />}*/}
                    <a href={item.link}>{item.image && <img src={item.image} alt={item.title} />}</a>
                    <div className="post-contentt">
                        <a href={item.link}><h3>{item.title}</h3></a>
                        <div className="post-description">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>

            ))}</li>
        </div>
        </main>
    );
};

export default NewsDetail;

