import { qs } from '../../utils/dom';

export function mountModal(): void {
    const modalEl = qs<HTMLDivElement>('#modal');
    const openBtn = qs<HTMLButtonElement>('#openModalBtn');
    const closeBtn = qs<HTMLButtonElement>('#closeModalBtn');
    const backdrop = qs<HTMLDivElement>('#modalBackdrop');

    const open = (): void => modalEl.classList.remove('hidden');
    const close = (): void => modalEl.classList.add('hidden');

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);
}
