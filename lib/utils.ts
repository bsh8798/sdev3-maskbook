export const formatDate = (raw : Date | undefined) => {
    if(!raw) return '';
    const d = new Date(raw);
    return `${d.getFullYear().toString().slice(2)}.
            ${((d.getMonth() + 1).toString()).padStart(2, '0')}.
            ${(d.getDate().toString()).padStart(2, '0')}`;
}