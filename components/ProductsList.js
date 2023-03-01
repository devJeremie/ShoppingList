import React from 'react';
import { 
  StyleSheet, Text,
  View, Pressable
} from 'react-native';

const Products = (props) => {
    props.name
    return (
      <Pressable
        onPress={() =>console.log('clique')}
        android_ripple={{color: 'purple'}}
      >
        <View style={styles.items}>
            <Text style={styles.element}>{ props.name }</Text>
        </View>
      </Pressable>
    )
}


const styles = StyleSheet.create({
    items: {
      marginTop: 10
    },
    element: {
      backgroundColor: "#ffb6c1",
      padding: 20,
      fontSize: 17,
      marginVertical: 6,
    }
  });

export default Products;