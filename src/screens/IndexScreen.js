import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {
    const { state, addBlogPosts } = useContext(Context)
    {console.log('nabooo')}

    return (
        <View>
            <Text>Hello World!!!</Text>
            <Button 
                title="Add Post"
                onPress={addBlogPosts}
            />
            <FlatList 
                data={state}
                keyExtractor={( item )=> item.title }
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen