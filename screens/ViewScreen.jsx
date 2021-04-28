import React from 'react';

import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview'

import * as ScreenOrientation from 'expo-screen-orientation';

export default function ViewScreen({ navigation, route }) {

    React.useEffect(() => {
        navigation.setOptions({ title: route.params.title });
        // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <WebView source={{ html: `<iframe allowfullscreen src=http:${route.params.link} allow="autoplay *; fullscreen *"  width="100%" height="100%"></iframe>` }} />
        </View>
    );
}
//`<div><iframe allowfullscreen src=http:${route.params.link} frameborder="0" allow="autoplay *; fullscreen *"  width="100%" height="528px"></iframe></div`
/*
{
                    animeData.links !== undefined && animeData.links[0] ? animeData.links[0].links.map((datalink, i) => {

                        return

                    }) : <ActivityIndicator style={{ flex: 1, justifyContent: "center", alignContent: "center" }} size="large" color="#000000" />
                }
*/