import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BookingscreenStyles } from '../styles/BookingScreenStyles';
import { juneData } from '../components/Datas/juneData';

const BookingScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [activeTab, setActiveTab] = useState('');

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

      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {days.map((day) => {
            const formattedDate = formatDate(day, selectedMonth, selectedYear);
            const data = juneData[formattedDate];
            const bookingCount = data ? data.bookingCount : 0;
            const memberNames = data ? data.memberName : [];

            return (
              <View key={day}>
                <TouchableOpacity
                  onPress={() => {
                    handleTabControl(day);
                    setSelectedDay(day);
                  }}
                  style={
                    activeTab === day ? BookingscreenStyles.tabActiveBgStyle : BookingscreenStyles.tabBgStyle
                  }
                >
                  <Text
                    style={
                      activeTab === day ? BookingscreenStyles.tabActiveText : BookingscreenStyles.tabText
                    }
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      );
    }

    return null;
  };

  const formatDate = (day, month, year) => {
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = (months.indexOf(month) + 1).toString().padStart(2, '0');
    const thatDay = `${formattedDay}-${formattedMonth}-${year}`
    return thatDay;
  };

  const selectedDate = formatDate(selectedDay, selectedMonth, selectedYear);


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
        <View>
          <Text>Selected Date: {selectedDate}</Text>
        </View>
        <View>
          {selectedDay && (
            <View style = {BookingscreenStyles.dataView}>
              <Text style = {BookingscreenStyles.dataHead}>Booking Count: <Text style = {BookingscreenStyles.dataText}>{juneData[selectedDate]?.bookingCount || 0}</Text></Text>
              <Text style = {BookingscreenStyles.dataHead}>Member Names: <Text style = {BookingscreenStyles.dataText}>{juneData[selectedDate]?.memberName?.join(', ') || 'No members'}</Text></Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;




  // const renderDays = () => {
  //   if (selectedMonth && selectedYear) {
  //     const numberOfDays = getNumberOfDays(selectedMonth, selectedYear);
  //     const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);
  //     return (
  //       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  //         {days.map((day) => (
  //           <View key={day}>
  //             <TouchableOpacity
  //               onPress={() => {
  //                 handleTabControl(day);
  //                 setSelectedDay(day);
  //               }}
  //               style={
  //                 activeTab === day ? BookingscreenStyles.tabActiveBgStyle : BookingscreenStyles.tabBgStyle
  //               }
  //             >
  //               <Text
  //                 style={
  //                   activeTab === day ? BookingscreenStyles.tabActiveText : BookingscreenStyles.tabText
  //                 }
  //               >
  //                 {day}
  //               </Text>
  //             </TouchableOpacity>
  //           </View>
  //         ))}
  //       </ScrollView>
  //     );
  //   }
  //   return null;
  // };

// import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import { Picker } from '@react-native-picker/picker'
// import { BookingscreenStyles } from '../styles/BookingScreenStyles'

// const BookingScreen = () => {

//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [activeTab, setActiveTab] = useState("");

//   const handleTabControl = (tab) => {
//     setActiveTab(tab);
// };

//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const years = ['2021', '2022', '2023'];

//   const getNumberOfDays = (month, year) => {
//     const monthIndex = months.indexOf(month);
//     const daysInMonth = [
//       31, // January
//       isLeapYear(year) ? 29 : 28, // February
//       31, // March
//       30, // April
//       31, // May
//       30, // June
//       31, // July
//       31, // August
//       30, // September
//       31, // October
//       30, // November
//       31, // December
//     ];
//     return daysInMonth[monthIndex];
//   };

//   const isLeapYear = (year) => {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     }
//     return false;
//   };

//   const renderDays = () => {
//     if (selectedMonth && selectedYear) {
//       const numberOfDays = getNumberOfDays(selectedMonth, selectedYear);
//       const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);
//       console.log(days)
//       return (
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {days.map((day) => (
//             <View key={day}>
//               <TouchableOpacity onPress={() => handleTabControl(day)} style = {activeTab === day ? BookingscreenStyles.tabActiveBgStyle : BookingscreenStyles.tabBgStyle}>
//                   <Text style = {activeTab === day ? BookingscreenStyles.tabActiveText : BookingscreenStyles.tabText}>{day}</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       );
//     }
//     return null;
//   };

//   return (
//     <SafeAreaView style={BookingscreenStyles.container}>
//       <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
//         <Text style={BookingscreenStyles.header}>Booking History</Text>
//         <View style={BookingscreenStyles.dropDownContainer}>
//           <Picker
//             style={BookingscreenStyles.picker}
//             selectedValue={selectedMonth}
//             onValueChange={(itemValue) => setSelectedMonth(itemValue)}
//           >
//             {months.map((month, index) => (
//               <Picker.Item key={index} label={month} value={month} />
//             ))}
//           </Picker>

//           <Picker
//             style={BookingscreenStyles.picker}
//             selectedValue={selectedYear}
//             onValueChange={(itemValue) => setSelectedYear(itemValue)}
//           >
//             {years.map((year, index) => (
//               <Picker.Item key={index} label={year} value={year} />
//             ))}
//           </Picker>
//         </View>
//         <View>
//           {renderDays()}
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default BookingScreen;
