import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const { id, title, content } = state.find(post => post.id === navigation.getParam('id'))

    return (
        <View>
            <Text>Id: {id}</Text>
            <Text>Title: {title}</Text>
            <Text>Content: {content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return { headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <EvilIcons 
                name="pencil" 
                size={30} 
                style={{ marginRight: 10}}
            />
        </TouchableOpacity>) }
}

export default ShowScreen   