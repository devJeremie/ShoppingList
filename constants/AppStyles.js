import  { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
    headerOne: {
        fontFamily: 'pacifico-regular',
        color: Colors.white,
        fontSize: 30,
        padding: 9,
    }, 
    textBody: {
        color: Colors.secondary,
        fontSize: 19,
    },
    headerTwo: {
        fontFamily: 'pacifico-regular',
        color: Colors.danger,
        fontSize: 25,
        padding: 9,
        textAlign: 'center'
    }
    //et a la suite on pourrait definir d'autre composant 
    
})