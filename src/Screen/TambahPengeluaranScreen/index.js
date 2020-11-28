import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import BackButton from '../../assets/svg/uil_angle-left-b-1.svg'
import BottomSheet from 'reanimated-bottom-sheet';
import MultiplyButton from '../../assets/svg/uil_multiply.svg';
import SelectButton from '../../assets/svg/uil_angle-left-b.svg'
import SimpanButton from '../../components/atoms/SimpanButtonComponent';
import TextInputComponent from '../../components/molecules/TextInputComponent';
import DateInputComponent from '../../components/organisms/DateInputComponent';

import PizzaLogo from '../../assets/svg/uil_pizza-slice.svg';
import InternetLogo from '../../assets/svg/uil_rss-alt.svg';
import EdukasiLogo from '../../assets/svg/uil_book-open.svg';
import HadiahLogo from '../../assets/svg/uil_gift.svg';
import TransportLogo from '../../assets/svg/uil_car-sideview.svg';
import BelanjaLogo from '../../assets/svg/uil_shopping-cart.svg';
import AlatRumahLogo from '../../assets/svg/uil_home.svg';
import OlahragaLogo from '../../assets/svg/uil_basketball.svg';
import HiburanLogo from '../../assets/svg/uil_clapper-board.svg';
import { FlatGrid } from 'react-native-super-grid';
import { items } from './data';
import NumberInputComponent from '../../components/molecules/NumberInputComponent';



const TambahPengeluaranScreen = (props) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const sheetRef = React.useRef(null);

    const getBottomSheet = () => {
        setIsOpen(true);
        if (isOpen == true) {
            sheetRef.current.snapTo(0);
        }
    }

    const closeSheet = () => {
        sheetRef.current.snapTo(2);
    }

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 30,
                height: 450,
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: '600', }}>Pilih Kategori</Text>
                <TouchableOpacity onPress={() => closeSheet()}>
                    <MultiplyButton width={24} height={24} />
                </TouchableOpacity>
            </View>
            <FlatGrid
                itemDimension={110}
                data={items}
                style={styles.gridView}
                spacing={10}
                renderItem={({ item }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        padding: 10,
                        height: 100,
                    }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 36, width: 36, backgroundColor: '#F2F2F2', borderRadius: 18 }}>
                            {item.name == 'PizzaLogo' && <PizzaLogo />}
                            {item.name == 'InternetLogo' && <InternetLogo />}
                            {item.name == 'EdukasiLogo' && <EdukasiLogo />}
                            {item.name == 'HadiahLogo' && <HadiahLogo />}
                            {item.name == 'TransportLogo' && <TransportLogo />}
                            {item.name == 'BelanjaLogo' && <BelanjaLogo />}
                            {item.name == 'AlatRumahLogo' && <AlatRumahLogo />}
                            {item.name == 'OlahragaLogo' && <OlahragaLogo />}
                            {item.name == 'HiburanLogo' && <HiburanLogo />}
                        </View>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 12,
                            color: '#828282',
                        }}>{item.code}</Text>
                    </View>
                )}
            />
        </View>

    );

    return (
        <>
            <View style={{ flex: 1, paddingHorizontal: 28, paddingTop: 52, backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ left: -10 }}>
                    <BackButton width={40} height={40} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, width: 162, fontWeight: 'bold', lineHeight: 25, marginTop: 24 }}>Tambah pengeluaran baru</Text>
                <TextInputComponent />
                <View>
                    <TextInput style={{ fontWeight: '600', fontSize: 12, color: '#4F4F4F', marginTop: 28 }}>Kategori</TextInput>
                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 36, width: 36, backgroundColor: '#F2F2F2', borderRadius: 18 }}>
                            <PizzaLogo />
                        </View>
                        <Text style={{ marginLeft: 17 }}>Makanan</Text>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => getBottomSheet()} style={{ padding: 10, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', height: 36, width: 36, backgroundColor: '#F2F2F2', borderRadius: 18 }}>
                                <SelectButton />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <DateInputComponent />
                <NumberInputComponent />
                <SimpanButton />
            </View>
            {isOpen && (
                <BottomSheet
                    ref={sheetRef}
                    snapPoints={[450, 300, 0]}
                    borderRadius={15}
                    renderContent={renderContent}
                />
            )}
        </>
    )
}

export default TambahPengeluaranScreen

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {

    },
});