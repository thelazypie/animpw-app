import fetchAnime from './fetchAnime'

export default async function fetchTopAnime() {
    const favoriteArr = await fetch(`http://youranime.me/api/anime/top?options=favorites`, { method: "GET" });
    const favoriteArrParsed = await favoriteArr.json();

    let favorites = [];

    for (const favorite of favoriteArrParsed.result.favorites) {

        const favoriteAnime = await fetchAnime(favorite.rid);

        favorites.push(favoriteAnime);
    }

    return favorites;
}