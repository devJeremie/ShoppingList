import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, Pressable } from 'react-native'


/*Le pressable dis que lon peut donc cliquer sur cette partie de code(View)
et on met en props le onPressHandler pour quil l'applique a tout 
les ButtonComponent de nottre appli car c'est la methode utilise*/
/*on utilise le spreadOperator sur la balise Viex et style pour 
pouvoir 'merger' nos style en ajoutnat de nouvelle proprietes par dessus*/
const ButtonComponent = ({ onPressHandler, style, children }) => {
    return( 
        <TouchableOpacity
            onPress={ onPressHandler }
            activeOpacity={0.6}
        >
            <View style={{...styles.btn, ...style}}>
                <Text style={styles.btnText}>{ children }</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({

    btn: {
        backgroundColor: "grey",
        padding: 9,
    },
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 17,
    }
})

export default ButtonComponent;