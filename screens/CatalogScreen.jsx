import React from 'react';

import { ScrollView, TouchableOpacity, View } from 'react-native';

import AnimeHorizontal from '../components/Anime/AnimeHorizontal'

import fetchList from '../api/fetchList'

export default function CatalogScreen({ navigation }) {

    let [animes, setAnimes] = React.useState([]);

    React.useEffect(() => {
        let isMounted = true;

        fetchList(0, 60).then((animeArr) => {
            if (isMounted) setAnimes([...animeArr]);
        }).catch(() => {
            //TODO: something went wrong anime XD
        })

        return () => {
            isMounted = false;
        }
    }, [])


    return (
        <View>
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
