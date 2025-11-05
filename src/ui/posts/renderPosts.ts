import type { Post } from '../../types/api';
import { qs, escapeHtml } from '../../utils/dom';
import { randInt, isEven } from '../../utils/number';

export function renderPosts(data: Post[]): void {
    const list = qs<HTMLUListElement>('#posts');
    list.innerHTML = '';

    data.forEach((p: Post, i: number): void => {
        const li: HTMLLIElement = document.createElement('li');
        const rnd: number = randInt(1, 100);
        const parity: string = isEven(rnd) ? 'парне' : 'непарне';
        li.innerHTML = `<strong>${p.id}. ${escapeHtml(p.title)}</strong>
      <div class="muted">${escapeHtml(p.body)}</div>
      <div class="muted">random: ${rnd} (${parity})</div>`;
        list.appendChild(li);

        // невелика затримка для "каскадної" появи
        setTimeout((): void => li.classList.add('appear'), i * 60);
    });
}
