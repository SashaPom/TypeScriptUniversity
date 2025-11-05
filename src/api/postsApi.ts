import type { Post } from '../types/api';

export async function fetchPosts(limit: number): Promise<Post[]> {
    const url: string = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
    const res: Response = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as Post[];
}
