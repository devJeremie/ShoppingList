import React, { useState } from 'react';
import { 
  StyleSheet,View, 
  TextInput, Button,
  Modal, Pressable
} from 'react-native';
import ButtonComponent from './ButtonComponent';

        
const AddProducts = ({ submitHandler, displayModal, cancelNewProduct }) => {

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

//on va mettre une condition dans le bouton 
//nous allons afficher le bouton dans un modal
    return(
      <Modal
        visible={ displayModal }
        animationType="slide"
      >
        <View style={styles.inputContainer}>
            <TextInput 
              style={styles.textInput}
              placeholder="Nouveau produit"
              onChangeText={inputHandler}//prend la valeur passe et via le setter renvoie
              value= {product}
              multiline//permet le multiligne à l'interieur de l'input
              maxLength={9}//bloque le nbr de caractere a 9
              secureTextEntry//permet de masquer les caracteres avec des *
              //ne fonctionne pas avec le multiline
              editable={true}//permet de bloquer l'input ou pas
            />
            <View style={styles.btnContainer}>
              <ButtonComponent 
                onPressHandler={ handleClick }
                style={styles.btnBlue}
              >
                Valider
              </ButtonComponent>
              <ButtonComponent 
                onPressHandler={ cancelNewProduct }
                style={styles.btnTomato}
              >
                Annuler
              </ButtonComponent>
            </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 24,
    },
    textInput: {
      borderColor: "grey",
      borderWidth: 1,
      padding: 5,
      paddingLeft: 9,
      fontSize: 18,
      //flexGrow: 1,
      marginBottom: 9
    },
    btnContainer: {
      flexDirection: "row",
      justifyContent: 'space-between'
    },
    btnBlue: {
      backgroundColor: "seagreen",
      width: 150,
      borderRadius: 6,
    },
    btnTomato: {
      backgroundColor: "tomato",
      width: 150,
      borderRadius: 6,
    }
  });

export default AddProducts;