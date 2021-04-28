export default async function fetchList(page, limit) {
    const res = await fetch(`http://youranime.me/api/anime?o=${page}&l=${limit}`, { method: "GET" });
    const json = await res.json();
    return json.result;
}