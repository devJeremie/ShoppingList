import React, { useState } from 'react';
import { 
  StyleSheet,View, 
  Modal, Pressable,
  Text, 
} from 'react-native';
import BodyText from './BodyText';

import ButtonComponent from './ButtonComponent';
import Input from './Input';

        
const AddProducts = ({ submitHandler, displayModal, cancelNewProduct }) => {

    //ici on cree un state
  const[product, setProduct] = useState('');
 
   
    //ici on va gere la modification de notre state
  const inputHandler = (val) => {
    const regex = /[^a-z]/gi;//regex pour le textInput
    setProduct(val.replace(regex, ''));//remplace le caractère ne se trouvant pas dls les lettre a à z par une chaine vide
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

          <BodyText>Veuillez indiquer un produit</BodyText>
           
            <Input 
               style={styles.textInput}
               textPlaceholder="Nouveau produit"
               onChangeHandler={inputHandler}//prend la valeur passe et via le setter renvoie
               inputValue= {product}
              // multiline permet le multiligne à l'interieur de l'input
               maxLength={9}//bloque le nbr de caractere a 9
               secureTextEntry//permet de masquer les caracteres avec des *
               //ne fonctionne pas avec le multiline
              // editable={true}//permet de bloquer l'input ou pas
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
      padding: 5,
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 15,
      borderRadius: 30,
      height: 50,
      fontSize: 20
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