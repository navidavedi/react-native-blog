import React, { useState, useContext } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addBlogPost } = useContext(Context)

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
                title="Create Blog Post"
                onPress={() => {
                    addBlogPost(
                        title, 
                        content, 
                        () => navigation.navigate('Index'))
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

export default CreateScreen