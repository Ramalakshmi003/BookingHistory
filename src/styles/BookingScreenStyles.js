import { StyleSheet } from "react-native";

export const BookingscreenStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fa738c'
    },
    header: {
        fontSize: 26,
        fontWeight: 700,
        color: 'white',
        textAlign: 'center',
        marginVertical: 10,
    },
    dropDownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    picker: {
        height: 50,
        width: '50%',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        color: 'black',
        fontWeight: 500,
    },
    tabActiveBgStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        margin : 5
    },
    tabBgStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin : 5
    },
    tabActiveText : {
        color: 'white',
        fontSize: 20,
        fontWeight: 900,
        textAlign: 'center',
        marginTop: 11
    },
    tabText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 900,
        textAlign: 'center',
        marginTop: 11
    },
    dataView : {
        height : 100,
        width : '90%',
        justifyContent : 'center',
        alignSelf : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
        margin : 15,
        borderRadius : 15
    },
    dataHead : {
        fontSize : 18,
        fontWeight : 700,
        color : 'black',
    },
    dataText : {
        fontSize : 16,
        color : 'green',
    }
})