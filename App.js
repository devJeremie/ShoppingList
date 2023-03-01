import React, { useState } from 'react';
import { 
  StyleSheet, Text,
  View, TextInput,
  Button, ScrollView ,
  FlatList, 
} from 'react-native';
//Ici j'importe mes components
import Products from './components/ProductsList';
import AddProducts from './components/AddProduct';

export default function App() {

//ici on recrée un state qui appele un tableau ici les valeurs 
//passer dans l'input seront enregistrés
  const[myproducts, setMyProducts] = useState([]);

/*ici au click sur le button qui contient la méthode submitHandler 
nous allons récuperer tout les éléments de l'array (const[myproducts])
on va les mettre dans un nouveau array que l'on va générer à la volée
et ensuite on va appliquer les infos(product)*/
  const submitHandler = (product) => {
    const idString = Date.now().toString();
    setMyProducts( currentMyProducts => [{key: idString, name: product},...currentMyProducts]);
  }
  

  return (
    <View style={styles.container}>
      <AddProducts submitHandler={submitHandler}/>

      <FlatList 
        data={ myproducts }
        renderItem={({ item }) => <Products name={ item.name }/> }

      />
    </View>
  );
}
/*explication map: l'array myproducts dans lequel on stock tout les produits
via le spreadOperator(...currentMyProducts) on recuprere tout ceux existants et on va
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
  }
  
});
