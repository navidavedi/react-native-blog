import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext'

const IndexScreen = ({ navigation }) => {
    const { state, removeBlogPost } = useContext(Context)
    {console.log('nabooo')}

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={( item )=> item.title }
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={
                            () => navigation.navigate('Show', { id: item.id })}
                    >
                        <View style={styles.box}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => removeBlogPost(item.id)} >
                                <Feather
                                    style={styles.icon}
                                    name="trash"
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return { headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather 
                name="plus" 
                size={30} 
                style={{ marginRight: 10}}
            />
        </TouchableOpacity>) }
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 30,
    }
})

export default IndexScreen