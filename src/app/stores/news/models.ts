export class NewsRequest{
    from: string;
    to: string;
    topic: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export interface NewsRespose {
    status: string;
    totalResults: number;
    articles: Article[];
}