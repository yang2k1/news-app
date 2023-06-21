import Parser from 'rss-parser';

class RssService {
    async fetchRssData(rssLink) {
        const parser = new Parser();
        const feed = await parser.parseURL(rssLink);

        const parsedPosts = feed.items.map(item => {
            const title = item.title;
            const link = item.link;
            const description = item.contentSnippet;
            const image = this.extractImageURL(item.content);

            return { title, link, description, image };
        });

        return parsedPosts;
    }

    extractImageURL(content) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const imgElement = doc.querySelector('img');
        return imgElement && imgElement.src;
    }
}

export default new RssService();
