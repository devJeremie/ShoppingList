import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text,
  View, TextInput,
  Button, ScrollView ,
  FlatList,Alert,
  Modal, Pressable
} from 'react-native';
//Ici j'importe mes components
import Products from './components/ProductsList';
import AddProducts from './components/AddProduct';
import DismissKeyboard from './components/DismissKeyboard';

export default function App() {

//ici on recrée un state qui appele un tableau ici les valeurs 
//passer dans l'input seront enregistrés
  const[myproducts, setMyProducts] = useState([]);
//ici on cree le state pour la modal
  const[showModal, setShowModal] = useState(false);


  /*Ceci est créer afin de vider la liste si le user essai 3fois de valider un produit
  qui comporte moin de deux caractères, on implemente le compteur avec setcount*/
  /*const[count, setCount] = useState([]);
  useEffect(() => {
    if (count > 3) {
      setMyProducts([])
    }
  },[count]);*/

/*ici au click sur le button qui contient la méthode submitHandler nous allons 
récuperer tout les éléments de l'array (const[myproducts])on va les mettre dans
un nouveau array que l'on va générer à la volée et ensuite on va appliquer les
infos(product) on va ajouter une condition pour faire que si le produit ne contient
pas au minimun 2 caractere on aura une modal*/
  const submitHandler = (product) => {
    if(product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts( currentMyProducts => [{key: idString, name: product},...currentMyProducts]);
    } else {
      setShowModal(true)
    }
     
  }
      /*}else{
      Alert.alert('Désolé','Nombre de caractère doit être superieur à 1',[
        {
          text: 'Compris',
          onPress: () => setCount(count +1)
        }
      ],
      {
        cancelable: true,
        onDismiss: () => console.warn('Desactivé')
      }
      )
    }
  }*/
  //ON A MIS 3 BOUTONS DANS L'ALERTE C LE MAX POUR ANDROID
/*Creation d'une méthode pour pouvoir supprimer un produit de la liste, on se sert du 
setter, puis de l'array en parametre, puis methode filter avec unecondition que si 
le key du product est le meme que celui invoque dans la fonction alors on efface */
  const deleteProduct = (key) => {
    setMyProducts(currentMyProducts => {
      return currentMyProducts.filter(product => product.key != key)
    }) 
  }
  

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="slide"
          hardwareAccelerated
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style= {styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Oups!!</Text>
              </View>
              <View style= {styles.modalBody}>
                <Text style={styles.modalBodyText}>Merci d'indiquer plus d'un seul caractère</Text>
              </View>
              <View style= {styles.modalFooter}>
                <Pressable
                style={styles.pressablleBtnModal}
                onPress={() => setShowModal(false)}
                >
                <Text style={styles.modalBtn}>OK</Text>
                </Pressable>
              </View>
            </View>

          </View>
        </Modal>

        <AddProducts submitHandler={submitHandler}/>

        <FlatList 
          data={ myproducts }
          renderItem={( { item } ) => (
            <Products 
              name={ item.name }
              idString={item.key}
              deleteProduct= {deleteProduct}
            /> 
          )}
        />
      </View>
    </DismissKeyboard>
  );
}
/*explication map: l'array myproducts dans lequel on stock tout les produits
via le spreadOperator(...currentMyProducts) on recupere tout ceux existants et on va
injecter celui qu'on vient de passer au niveau du textInputet on les affichent. 
Comme nous n'avons ni id ni key dans les arrays, nous avons ajoutés l'argument 
'index' qui va nous servir de key.*/
/*si on avait fait un scrollview plutot qu'une flatlist
<ScrollView>
        <View style={styles.items}>
          {
            myproducts.map((product, index) => {
              return (
                <Text style={styles.element} key={index}>{ product }</Text>
              )
            })
          }
        </View>
      </ScrollView>
*/
const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    flex: 1, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '90%',
    height: 250,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalHeader: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderToprightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  modalHeaderText: {
    color:'grey',
    fontSize: 17,
  },
  modalBody: {
    flex: 1,
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: '100%',
  },
  pressablleBtnModal: {
    backgroundColor: 'lightseagreen',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    padding: 16,
  }
  
});
