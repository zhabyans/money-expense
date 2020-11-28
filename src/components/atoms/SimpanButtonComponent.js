import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SimpanButton = () => {
    return (
        <TouchableOpacity
            onPress={() => alert('Tombol Simpan')}
            style={{
                marginTop: 28,
                alignSelf: 'center',
                justifyContent: 'center', alignItems: 'center',
                width: 304, height: 40, backgroundColor: '#46B5A7', borderRadius: 8, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
            }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Simpan</Text>
        </TouchableOpacity>
    )
}

export default SimpanButton

const styles = StyleSheet.create({})
