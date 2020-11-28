import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const NumberInputComponent = () => {
    return (
        <View>
            <Text style={{ color: '#4F4F4F', fontWeight: '600', fontSize: 12, marginTop: 30 }}>Nominal</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <Text style={{
                    color: '#4F4F4F'
                }}>Rp.</Text>
                <TextInput keyboardType='number-pad' style={{ flex: 1, borderColor: '#BDBDBD', borderBottomWidth: 2 }} />
            </View>
        </View>
    )
}

export default NumberInputComponent

const styles = StyleSheet.create({})
