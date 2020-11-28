import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PlusLogo from '../../assets/svg/uil_plus.svg'

const PlusButton = (props) => {
    return (
        <TouchableOpacity style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#F54291',
            position: 'absolute',
            bottom: 21,
            right: 21,
            shadowColor: "rgba(0, 0, 0, 0.04)",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }} onPress={() => props.navigation.navigate('TambahPengeluaran')}>
            <PlusLogo />
        </TouchableOpacity>
    )
}

export default PlusButton

const styles = StyleSheet.create({})
