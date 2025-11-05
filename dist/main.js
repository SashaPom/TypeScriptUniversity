"use strict";
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isEven(n) {
    return n % 2 === 0;
}
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalEl = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const toTopBtn = document.getElementById('toTopBtn');
const loadPostsBtn = document.getElementById('loadPostsBtn');
const postsList = document.getElementById('posts');
function openModal() {
    modalEl.classList.remove('hidden');
}
function closeModal() {
    modalEl.classList.add('hidden');
}
openModalBtn.addEventListener('click', openModal);
closeModalBtn?.addEventListener('click', closeModal);
modalBackdrop?.addEventListener('click', closeModal);
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const shouldShow = y > 300;
    toTopBtn.classList.toggle('hidden', !shouldShow);
});
toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
function animateInItems() {
    const items = postsList.querySelectorAll('li');
    items.forEach((li, i) => {
        const delayMs = i * 60;
        setTimeout(() => li.classList.add('appear'), delayMs);
    });
}
async function loadPosts(limit) {
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
    const res = await fetch(url);
    const data = (await res.json());
    postsList.innerHTML = '';
    data.forEach((p) => {
        const li = document.createElement('li');
        const rnd = randInt(1, 100);
        const parity = isEven(rnd) ? 'парне' : 'непарне';
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
function escapeHtml(text) {
    const map = {
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
const user = 'Студент';
const generated = randInt(1, 100);
const even = isEven(generated);
console.log(`${user}, випадкове число: ${generated}. Це парне? ${even}`);
//# sourceMappingURL=main.js.map