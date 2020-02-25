import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context)
    const blogPost = state.find(post => post.id === navigation.getParam('id'))

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)
    

    

    return (
        <View style={styles.box}>
            <Text>Enter Title: </Text>
            <TextInput
                value={title}
                onChangeText={(val)=> setTitle(val)}
                style={styles.input}
             />
             <Text>Enter Content: </Text>
            <TextInput
                value={content}
                onChangeText={(val)=> setContent(val)}
                style={styles.input}
             />
            <Button 
                title="Update Blog Post"
                onPress={() => {
                    editBlogPost(
                        navigation.getParam('id'),
                        title, 
                        content, 
                        () => navigation.navigate('Show'))
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 5,
    }
})

export default EditScreen