export default async function fetchAnime(id) {
    const res = await fetch(`http://youranime.me/api/anime?id=${id}`, { method: "GET", headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 YaBrowser/20.7.3.100 Yowser/2.5 Yptp/1.23 Safari/537.36' } });
    const json = await res.json();
    return json.result;
}