import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextInputComponent = () => {
    return (
        <View>
            <Text style={{ fontSize: 12, color: '#4F4F4F', marginTop: 52 }}>Nama pengeluaran</Text>
            <TextInput placeholder="Nasi goreng" placeholderTextColor="#BDBDBD" style={{ height: 40, borderColor: '#46B5A7', borderBottomWidth: 2, marginTop: 10 }} />
        </View>
    )
}

export default TextInputComponent

const styles = StyleSheet.create({})
