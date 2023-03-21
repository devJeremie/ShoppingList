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

//on va mettreune condition dans le bouton 
    return(
        <View style={styles.inputContainer}>
            <TextInput 
              style={styles.textInput}
              placeholder="Nouveau produit"
              onChangeText={inputHandler}
              value= {product}
              multiline//permet le multiligne à l'interieur de l'input
              maxLength={9}//bloque le nbr de caractere a 9
              secureTextEntry//permet de masquer les caracteres avec des *
              //ne fonctionne pas avec le multiline
              editable={true}//permet de bloquer l'input ou pas
              
              
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
      marginBottom: 15,
    },
    textInput: {
      borderColor: "grey",
      borderWidth: 1,
      padding: 5,
      paddingLeft: 9,
      fontSize: 18,
      flexGrow: 1,
      marginBottom: 9
    }
  });

export default AddProducts;