import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import CalendarButton from '../../assets/svg/uil_calendar-alt.svg';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInputComponent = () => {

    const [date, setDate] = useState(new Date().getTime());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View>
            <Text style={{ color: '#4F4F4F', fontWeight: '600', fontSize: 12, marginTop: 28 }}>Tanggal</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput editable={false} placeholderTextColor="#BDBDBD" style={{ flex: 1, borderColor: '#BDBDBD', borderBottomWidth: 2 }} />
                <View style={{}}>
                    <View style={{ alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', height: 36, width: 36, borderRadius: 18 }}>
                        <TouchableOpacity style={{ padding: 10 }} onPress={showDatepicker}>
                            <CalendarButton />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

export default DateInputComponent

const styles = StyleSheet.create({})
