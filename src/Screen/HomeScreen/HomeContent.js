import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PizzaLogo from '../../assets/svg/uil_pizza-slice.svg';
import PizzaLogoWhite from '../../assets/svg/uil_pizza-slice-white.svg';
import InternetLogo from '../../assets/svg/uil_rss-alt.svg';
import InternetLogoWhite from '../../assets/svg/uil_rss-alt-white.svg';
import EdukasiLogo from '../../assets/svg/uil_book-open.svg';
import HadiahLogo from '../../assets/svg/uil_gift.svg';
import HadiahLogoWhite from '../../assets/svg/uil_gift-white.svg';
import TransportLogo from '../../assets/svg/uil_car-sideview.svg';
import TransportLogoWhite from '../../assets/svg/uil_car-sideview-white.svg';
import BelanjaLogo from '../../assets/svg/uil_shopping-cart.svg';
import AlatRumahLogo from '../../assets/svg/uil_home.svg';
import OlahragaLogo from '../../assets/svg/uil_basketball.svg';
import HiburanLogo from '../../assets/svg/uil_clapper-board.svg';

const HomeContent = () => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontWeight: 'bold', color: '#4F4F4F', lineHeight: 19, marginTop: 22 }}>Pengeluaran berdasarkan kategori</Text>
            <FlatList horizontal={true}
                data={[
                    { jenis: 'Makanan', logo: 'PizzaLogoWhite', total: 50000 },
                    { jenis: 'Internet', logo: 'InternetLogoWhite', total: 50000 },
                    { jenis: 'Transportasi', logo: 'TransportLogoWhite', total: 20000 },
                    { jenis: 'Hadiah', logo: 'HadiahLogoWhite', total: 40000 },

                ]}
                renderItem={({ item }) => <View style={{ flexDirection: 'row', margin: 5 }} >
                    <View style={{ marginRight: 20, paddingLeft: 16, paddingTop: 16, marginTop: 30, backgroundColor: 'white', width: 120, height: 120, borderRadius: 12, shadowColor: "rgba(0,0,0,0.04)", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 10, shadowRadius: 10, elevation: 5 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 36, width: 36, backgroundColor: '#46B5A7', borderRadius: 18 }}>
                            {item.logo == 'PizzaLogoWhite' && <PizzaLogoWhite />}
                            {item.logo == 'InternetLogoWhite' && <InternetLogoWhite />}
                            {item.logo == 'EdukasiLogo' && <EdukasiLogo />}
                            {item.logo == 'HadiahLogoWhite' && <HadiahLogoWhite />}
                            {item.logo == 'TransportLogoWhite' && <TransportLogoWhite />}
                            {item.logo == 'BelanjaLogo' && <BelanjaLogo />}
                            {item.logo == 'AlatRumahLogo' && <AlatRumahLogo />}
                            {item.logo == 'OlahragaLogo' && <OlahragaLogo />}
                            {item.logo == 'HiburanLogo' && <HiburanLogo />}
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12, color: '#828282', lineHeight: 16 }}>{item.jenis}</Text>
                        <Text style={{ marginTop: 7, color: '#4F4F4F', fontWeight: '700', lineHeight: 16 }}>Rp. {item.total}</Text>
                    </View>
                </View>}
            />
            <Text style={{ marginTop: 30, fontWeight: '700', color: '#4F4F4F', lineHeight: 19 }}>Semua Pengeluaran</Text>
            <View style={{ maxHeight: 310, paddingLeft: 16, paddingVertical: 15, marginVertical: 30, backgroundColor: 'white', borderRadius: 12, shadowColor: "rgba(0,0,0,0.04)", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 10, shadowRadius: 10, elevation: 5 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', paddingBottom: 7 }}>Hari ini</Text>
                <FlatList
                    data={[
                        { nama: 'ayam geprek', logo: 'PizzaLogo', harga: 12000 },
                        { nama: 'beli sabun', logo: 'AlatRumahLogo', harga: 2000 },
                        { nama: 'bayar kursus', logo: 'EdukasiLogo', harga: 120000 },
                        { nama: 'ayam goreng', logo: 'PizzaLogo', harga: 10000 },
                        { nama: 'beli pulsa', logo: 'InternetLogo', harga: 12000 },
                        { nama: 'ayam kecap', logo: 'PizzaLogo', harga: 14000 },
                        { nama: 'ayam pedas', logo: 'PizzaLogo', harga: 13000 },

                    ]}
                    renderItem={({ item }) => <View style={{ paddingRight: 15, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 36, width: 36, backgroundColor: '#F2F2F2', borderRadius: 18 }}>
                            {item.logo == 'PizzaLogo' && <PizzaLogo />}
                            {item.logo == 'InternetLogo' && <InternetLogo />}
                            {item.logo == 'EdukasiLogo' && <EdukasiLogo />}
                            {item.logo == 'HadiahLogo' && <HadiahLogo />}
                            {item.logo == 'TransportLogo' && <TransportLogo />}
                            {item.logo == 'BelanjaLogo' && <BelanjaLogo />}
                            {item.logo == 'AlatRumahLogo' && <AlatRumahLogo />}
                            {item.logo == 'OlahragaLogo' && <OlahragaLogo />}
                            {item.logo == 'HiburanLogo' && <HiburanLogo />}
                        </View>
                        <Text style={{ marginLeft: 16, fontSize: 12, color: '#4F4F4F' }}>{item.nama}</Text>
                        <View style={{ flex: 1 }}>
                            <Text style={{ alignSelf: 'flex-end', color: '#4F4F4F', fontWeight: 'bold' }}>Rp. {item.harga}</Text>
                        </View>
                    </View>}
                />
            </View>
        </View>
    )
}

export default HomeContent

const styles = StyleSheet.create({})
