import React from "react";
import { 
    StyleSheet, View, 
   TextInput 
} from "react-native";
import Colors from '../constants/colors'

const Input = (props) => {
    return (
        <TextInput 
            {...props}//permet d'appliquer au composant enfant ces propres props(maxlength par ex)
            style = {{...styles.input, ...props.style}}
            placeholder={props.textPlaceholder}
            onChangeText={props.onChangeHandler}
            value={props.inputValue}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.secondary,
        borderWidth: 1,
        height: 40,
        marginVertical: 5,
    },
})



export default Input;