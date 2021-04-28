import React from 'react';
import { ScrollView, Text, Image, View, Button } from 'react-native';

import fetchAnime from '../api/fetchAnime'

import { ActivityIndicator } from 'react-native'

import { WebView } from 'react-native-webview'

export default function AnimeScreen({ navigation, route }) {

    const [animeData, setAnime] = React.useState({});
    const [loading, setloading] = React.useState(true);
    const { needRequest } = route.params;

    React.useEffect(() => {
        let isMounted = true;

        getData().then((anime) => {
            if (isMounted) {

                setAnime(anime);
                navigation.setOptions({ title: anime.rus })
                setloading(false);
            }

        });

        return () => {
            isMounted = false;
        };
    }, []);

    const getData = async () => {
        if (needRequest) {
            const id = route.params.data.id;
            const anime = await fetchAnime(id);
            return anime[0];
        }
        else {
            return route.params.data;
        }
    }

    return (
        loading ? <ActivityIndicator style={{ flex: 1, justifyContent: "center", alignContent: "center" }} size="large" color="#000000" /> : <ScrollView>
            <Image style={{ width: 400, height: 500, resizeMode: "contain", alignSelf: "center" }} source={
                {
                    uri: `http://youranime.me${animeData.poster}`
                }
            } />
            <Text style={{ padding: 20, textAlign: "center" }}>{animeData.rus} | {animeData.eng}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 1, textAlign: "center" }}>Тип: {animeData.type}</Text>
                <Text style={{ flex: 1, textAlign: "center" }}>{animeData.rate}+</Text>
                <Text style={{ flex: 1, textAlign: "center" }}>Год: {animeData.year}</Text>
            </View>
            <Text style={{ padding: 10 }}>{animeData.description}</Text>
            <ScrollView horizontal>
                {
                    animeData.screenshots === undefined ? <Text>LOADING!</Text> : animeData.screenshots.map((screenshot, i) => {
                        return (
                            <Image key={i} style={{ flex: 1, width: 400, height: 300, resizeMode: "contain" }} source={
                                {
                                    uri: `http://youranime.me${screenshot}`
                                }
                            } />
                        )
                    })
                }
            </ScrollView>
            <View>
                {/* <WebView style={{ width: "100%", height: 500 }} source={{ uri: `http://kodik.online/serial/20140/J7vwNn2023c87e` }} /> */}
                <Button title="Начать просмотр" onPress={() => navigation.push('ViewTab', { title: animeData.rus, link: `${animeData.links[0].links[0].link}` })} />
                {/* {
                    animeData.links === undefined ? <Text>LOADING</Text> : animeData.links[0].links.map((datalink, i) => {
                        return <WebView style={{ width: "100%", height: 200 }} key={i} source={{ uri: `http:${datalink.link}` }} />
                    })
                } */}
            </View>
        </ScrollView>
    );
}
