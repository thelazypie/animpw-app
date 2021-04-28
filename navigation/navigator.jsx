import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import MainScreen from '../screens/MainScreen'
import CatalogScreen from '../screens/CatalogScreen'
import ProfileScreen from '../screens/ProfileScreen'
import AnimeScreen from '../screens/AnimeScreen'
import ViewScreen from '../screens/ViewScreen'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();


const BottomTabs = (props) => {
    return (
        <Tabs.Navigator initialRouteName="Main" tabBarOptions={{ activeBackgroundColor: "#eee", activeTintColor: "#000" }} lazy>
            <Tabs.Screen options={{ title: "Главная", tabBarIcon: () => <FontAwesome5 name="home" size={24} /> }} name="MainTab" component={MainScreen} />
            <Tabs.Screen options={{ title: "Каталог", tabBarIcon: () => <FontAwesome5 name="compass" size={24} /> }} name="CatalogTab" component={CatalogScreen} />
            <Tabs.Screen options={{ title: "Профиль", tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} /> }} name="ProfileTab" component={ProfileScreen} />
        </Tabs.Navigator>
    )
}

const Navigator = (props) => {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen name='Main' options={{ title: "ANIM.PW", }} children={BottomTabs} />
            <Stack.Screen name="AnimeTab" options={{ title: "" }} component={AnimeScreen} />
            <Stack.Screen name="ViewTab" options={{ title: "" }} component={ViewScreen} />
        </Stack.Navigator>
    )
}

export default Navigator;


