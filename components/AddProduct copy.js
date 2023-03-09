import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,View, TextInput, Button
} from 'react-native';

const AddProducts = ({ submitHandler }) => {

    //ici on cree un state
  const[product, setProduct] = useState('');
  //state avec booleen pour le bouton
  const[btnDisable, setBtnDisable] = useState(true);
  //si le nom tape n'est pas superieur a 1 caractères alors le bouton est disable
  useEffect(() => {
    if(product.length > 1) {
      setBtnDisable(false);
    }else {
      setBtnDisable(true);
    }
   
  },[product]);
    //ici on va gere la modification de notre state
  const inputHandler = (val) => {
    setProduct(val)
  }
  const handleClick = () =>{
    submitHandler(product);
    //va servir a vider le texInput(value) une fois le produit valid
    setProduct('');
  }

//on va mettreune condition dans le bouton 
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
              disabled={ btnDisable }
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