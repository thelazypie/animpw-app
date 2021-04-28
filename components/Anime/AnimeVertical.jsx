import React from 'react'

import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native'

const AnimeVertical = ({ rusTitle, engTitle, description, poster }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.poster} source={
                {
                    uri: poster,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 YaBrowser/20.7.3.100 Yowser/2.5 Yptp/1.23 Safari/537.36'
                    }
                }} />
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{rusTitle && engTitle ? `${rusTitle} | ${engTitle}` : rusTitle}</Text>
                <Text style={styles.description}>{description.length > 144 ? description.substr(0, 144).concat('...') : description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flex: 1,
        width: 150,
        flexDirection: 'column'
    },
    poster: {
        flex: 3,
        resizeMode: 'contain'
    },
    textWrapper: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 14
    },
    description: {
        display: 'none'
    }
})


export default AnimeVertical;