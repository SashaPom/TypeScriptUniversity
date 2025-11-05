import { qs } from '../../utils/dom';

export function mountToTop(): void {
    const toTopBtn = qs<HTMLButtonElement>('#toTopBtn');

    window.addEventListener('scroll', (): void => {
        const show: boolean = window.scrollY > 100;
        toTopBtn.classList.toggle('hidden', !show);
    });

    toTopBtn.addEventListener('click', (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
