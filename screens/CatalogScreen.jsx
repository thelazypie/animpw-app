import React from 'react';

import { ScrollView, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import AnimeHorizontal from '../components/Anime/AnimeHorizontal'

import fetchList from '../api/fetchList'

export default function CatalogScreen({ navigation }) {

    let [animes, setAnimes] = React.useState([]);
    const [loading, setloading] = React.useState(true);

    React.useEffect(() => {
        let isMounted = true;

        fetchList(0, 60).then((animeArr) => {
            if (isMounted) {
                setAnimes([...animeArr]);
                setloading(false);
            }
        }).catch(() => {
            //TODO: something went wrong anime XD
        })

        return () => {
            isMounted = false;
        }
    }, [])


    return (
        loading ? <ActivityIndicator style={{ flex: 1, justifyContent: "center", alignContent: "center" }} size="large" color="#000000" /> : <View>
            <ScrollView>
                {animes.map((anime, i) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.push("AnimeTab", { data: anime, needRequest: true })}
                            key={i} children={
                                <AnimeHorizontal
                                    poster={`http://youranime.me${anime.poster}`}
                                    rusTitle={anime.rus} engTitle={anime.eng}
                                    description={anime.description}
                                />
                            }
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}
