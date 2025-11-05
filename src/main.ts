function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

const openModalBtn: HTMLButtonElement = document.getElementById('openModalBtn') as HTMLButtonElement;
const closeModalBtn = document.getElementById('closeModalBtn') as HTMLButtonElement;
const modalEl = document.getElementById('modal') as HTMLDivElement;
const modalBackdrop = document.getElementById('modalBackdrop') as HTMLDivElement;

const toTopBtn: HTMLButtonElement = document.getElementById('toTopBtn') as HTMLButtonElement;
const loadPostsBtn: HTMLButtonElement = document.getElementById('loadPostsBtn') as HTMLButtonElement;
const postsList: HTMLUListElement = document.getElementById('posts') as HTMLUListElement;

function openModal(): void {
    modalEl.classList.remove('hidden');
}
function closeModal(): void {
    modalEl.classList.add('hidden');
}
openModalBtn.addEventListener('click', openModal);
closeModalBtn?.addEventListener('click', closeModal);
modalBackdrop?.addEventListener('click', closeModal);

window.addEventListener('scroll', (): void => {
    const y: number = window.scrollY;
    const shouldShow: boolean = y > 300;
    toTopBtn.classList.toggle('hidden', !shouldShow);
});

toTopBtn.addEventListener('click', (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function animateInItems(): void {
    const items: NodeListOf<HTMLLIElement> = postsList.querySelectorAll('li');
    items.forEach((li: HTMLLIElement, i: number): void => {
        const delayMs: number = i * 60;
        setTimeout((): void => li.classList.add('appear'), delayMs);
    });
}

type Post = { userId: number; id: number; title: string; body: string };

async function loadPosts(limit: number): Promise<void> {
    const url: string = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
    const res: Response = await fetch(url);
    const data: Post[] = (await res.json()) as Post[];

    postsList.innerHTML = '';

    data.forEach((p: Post): void => {
        const li: HTMLLIElement = document.createElement('li');
        const rnd: number = randInt(1, 100);
        const parity: string = isEven(rnd) ? 'парне' : 'непарне';
        li.innerHTML = `<strong>${p.id}. ${escapeHtml(p.title)}</strong>
                    <div class="muted">${escapeHtml(p.body)}</div>
                    <div class="muted">random: ${rnd} (${parity})</div>`;
        postsList.appendChild(li);
    });

    requestAnimationFrame(animateInItems);
}

loadPostsBtn.addEventListener('click', async () => {
    await loadPosts(5);
});

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m: string): string => map[m]);
}

const user: string = 'Студент';
const generated: number = randInt(1, 100);
const even: boolean = isEven(generated);
console.log(`${user}, випадкове число: ${generated}. Це парне? ${even}`);
