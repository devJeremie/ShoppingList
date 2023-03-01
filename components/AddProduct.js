import React, { useState } from 'react';
import { 
  StyleSheet,View, TextInput, Button
} from 'react-native';

const AddProducts = ({ submitHandler }) => {

    //ici on cree un state
  const[product, setProduct] = useState('');
    //ici on va gere la modification de notre state
  const inputHandler = (val) => {
    setProduct(val)
  }
  const handleClick = () =>{
    submitHandler(product);
    //va servir a vider le texInput(value) une fois le produit valid
    setProduct('');
  }


    return(
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder="Nouveau produit"
            onChangeText={inputHandler}
            value= {product}
            />
            <Button 
            title="Valider"
            onPress={ handleClick }
            />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      marginBottom: 15,
    },
    textInput: {
      borderColor: "grey",
      borderWidth: 1,
      padding: 5,
      paddingLeft: 9,
      fontSize: 18,
      flexGrow: 1,
    }
  });

export default AddProducts;