import React from 'react';

import { View, ScrollView, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import fetchTopAnime from '../api/fetchTopAnime'
import AnimeVertical from '../components/Anime/AnimeVertical'

export default function CatalogScreen({ navigation }) {

    let [favorites, setfavorites] = React.useState([]);
    const [loading, setloading] = React.useState(true);

    React.useEffect(() => {
        let isMounted = true;
        fetchTopAnime().then((fav) => {
            if (isMounted) {
                setfavorites([...fav]);
                setloading(false);
            }
        });
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        loading ? <ActivityIndicator style={{ flex: 1, justifyContent: "center", alignContent: "center" }} size="large" color="#000000" /> : <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, padding: 5 }}>Популярные аниме</Text>
            <ScrollView horizontal style={{ flex: 1 }}>
                {favorites.map((favorite, i) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.push('AnimeTab', { data: favorite[0], needRequest: false })
                            }
                            key={i}
                            children={
                                <AnimeVertical
                                    poster={`http://youranime.me${favorite[0].poster}`}
                                    rusTitle={favorite[0].rus}
                                    description={favorite[0].description}
                                />
                            }
                        />
                    )
                })}

            </ScrollView>
            <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Пока не придумал чо тут будет</Text>
                {/* На самом деле придумал, тут будут последние обновления */}
            </View>
        </View>
    );
}
