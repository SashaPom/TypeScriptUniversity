import { mountModal } from './ui/modal/modal.js';
import { mountToTop } from './ui/scroll/toTop.js';
import { fetchPosts } from './api/postsApi.js';
import { renderPosts } from './ui/posts/renderPosts.js';
import { randInt, isEven } from './utils/number.js';

// Монтуємо інтерактивність
mountModal();
mountToTop();

// Кнопка завантаження постів
const loadPostsBtn = document.getElementById('loadPostsBtn') as HTMLButtonElement;
loadPostsBtn.addEventListener('click', (): void => { void loadPosts(5); });

async function loadPosts(limit: number): Promise<void> {
    const posts = await fetchPosts(limit);
    renderPosts(posts);
}

const user: string = 'Студент';
const generated: number = randInt(1, 100);
const even: boolean = isEven(generated);
console.log(`${user}, випадкове число: ${generated}. Це парне? ${even}`);
