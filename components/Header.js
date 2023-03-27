import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';
import AppStyles from '../constants/AppStyles';


const Header = () => {
    return ( 
        <View style={styles.headerWrapper}>
            <Text style={AppStyles.headerOne}>My Shopping List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 30,
        paddingTop: 25,
        paddingBottom: 15,
    },
})


export default Header;