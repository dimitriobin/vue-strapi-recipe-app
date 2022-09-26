export default function renderLoremPicsum(width: number): string {
    const randomIndex = Math.floor(Math.random() * 100);
    return `https://picsum.photos/${width}?random=${randomIndex}`;
}
