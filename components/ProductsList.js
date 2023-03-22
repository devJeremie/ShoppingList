import React from 'react';
import { 
  StyleSheet, Text,
  View, Pressable
} from 'react-native';

const Products = ( {name, deleteProduct, idString} ) => {
    
    return (
      <Pressable
        onPress={() =>deleteProduct(idString)}
        android_ripple={{color: 'purple'}}
      >
        <View style={styles.items}>
            <Text style={styles.element}>{ name }</Text>
        </View>
      </Pressable>
    )
}


const styles = StyleSheet.create({
    items: {
      marginTop: 10
    },
    element: {
      backgroundColor: "mediumseagreen",
      color: "#fff",
      borderRadius: 6,
      padding: 20,
      fontSize: 17,
      marginVertical: 6,
    }
  });

export default Products;