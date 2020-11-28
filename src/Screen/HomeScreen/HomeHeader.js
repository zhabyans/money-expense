import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserLogo from "../../assets/svg/uil_user.svg";

const HomeHeader = () => {
    return (
        <View style={{ paddingLeft: 20, height: 202, backgroundColor: '#46B5A7' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 64, width: 64, backgroundColor: 'rgba(51,51,51,0.2)', borderRadius: 32, marginTop: 46 }}>
                <UserLogo />
            </View>
            <Text style={{ color: 'white', marginTop: 17 }}>Pengeluaran Anda hari ini</Text>
            <Text style={{ color: 'white', fontSize: 24, marginTop: 5, fontWeight: '700' }}>Rp. 120,000</Text>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})
