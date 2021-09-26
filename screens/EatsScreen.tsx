import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const EatsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Uber Eats coming soon...</Text>
        </View>
    )
}

export default EatsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    }
})
