import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { BookingscreenStyles } from '../styles/BookingScreenStyles'

const BookingScreen = () => {

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [activeTab, setActiveTab] = useState("");

  const handleTabControl = (tab) => {
    setActiveTab(tab);
};

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2021', '2022', '2023'];

  const getNumberOfDays = (month, year) => {
    const monthIndex = months.indexOf(month);
    const daysInMonth = [
      31, // January
      isLeapYear(year) ? 29 : 28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31, // December
    ];
    return daysInMonth[monthIndex];
  };

  const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  };

  const renderDays = () => {
    if (selectedMonth && selectedYear) {
      const numberOfDays = getNumberOfDays(selectedMonth, selectedYear);
      const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);
      console.log(days)
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {days.map((day) => (
            <View key={day}>
              <TouchableOpacity onPress={() => handleTabControl(day)} style = {activeTab === day ? BookingscreenStyles.tabActiveBgStyle : BookingscreenStyles.tabBgStyle}>
                  <Text style = {activeTab === day ? BookingscreenStyles.tabActiveText : BookingscreenStyles.tabText}>{day}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={BookingscreenStyles.container}>
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Text style={BookingscreenStyles.header}>Booking History</Text>
        <View style={BookingscreenStyles.dropDownContainer}>
          <Picker
            style={BookingscreenStyles.picker}
            selectedValue={selectedMonth}
            onValueChange={(itemValue) => setSelectedMonth(itemValue)}
          >
            {months.map((month, index) => (
              <Picker.Item key={index} label={month} value={month} />
            ))}
          </Picker>

          <Picker
            style={BookingscreenStyles.picker}
            selectedValue={selectedYear}
            onValueChange={(itemValue) => setSelectedYear(itemValue)}
          >
            {years.map((year, index) => (
              <Picker.Item key={index} label={year} value={year} />
            ))}
          </Picker>
        </View>
        <View>
          {renderDays()}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BookingScreen;
