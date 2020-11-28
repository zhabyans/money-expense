import React from 'react'
import { StyleSheet, View } from 'react-native'
import HomeContent from './HomeContent';
import HomeHeader from './HomeHeader';
import PlusButton from '../../components/atoms/PlusButtonComponent';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <HomeHeader />
            <HomeContent />
            <PlusButton {...props} />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#F2F2F2'
    }
})
