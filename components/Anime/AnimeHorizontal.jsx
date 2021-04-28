import React from 'react'

import { View, Image, Text, StyleSheet } from 'react-native'

const AnimeHorizontal = ({ rusTitle, engTitle, description, poster }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.poster} source={
                {
                    uri: poster,
                    // headers: {
                    //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 YaBrowser/20.7.3.100 Yowser/2.5 Yptp/1.23 Safari/537.36'
                    // }
                }
            } />
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{rusTitle}</Text>
                <Text style={styles.subtitle}>{engTitle || null}</Text>
                <Text style={styles.description}>{description.length > 144 ? description.substr(0, 144).concat('...') : description}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 1,
        height: 180,
        flexDirection: 'row'
    },
    poster: {
        flex: 1,
        margin: 10,
        resizeMode: 'cover'
    },
    textWrapper: {
        flex: 2
    },
    title: {
        fontSize: 16,
        textAlign: "left"
    },
    subtitle: {
        fontSize: 14,
        textAlign: "left",
        color: "#333333"
    },
    description: {}
})

export default AnimeHorizontal