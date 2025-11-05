export function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m: string): string => map[m]);
}

export function qs<T extends Element = Element>(sel: string, root: Document | Element = document): T {
    const el = root.querySelector(sel);
    if (!el) throw new Error(`Selector not found: ${sel}`);
    return el as T;
}
