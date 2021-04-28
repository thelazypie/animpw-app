export default async function fetchAnime(id) {
    const res = await fetch(`http://youranime.me/api/anime?id=${id}`, { method: "GET" });
    const json = await res.json();
    return json.result;
}