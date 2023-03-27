import React from 'react';
import { 
  StyleSheet, Text,
  View, Pressable
} from 'react-native';
import Colors from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';

const Products = ( {name, deleteProduct, idString} ) => {
    
    return (
      <Pressable
        onPress={() =>deleteProduct(idString)}
        android_ripple={{color: 'purple'}}
      >
        <View style={styles.items}>
          <FontAwesome 
            name='remove'
            size={30}
            color={Colors.white}
          />
            <Text style={styles.element}>{ name }</Text>
        </View>
      </Pressable>
    )
}


const styles = StyleSheet.create({
    items: {
      marginTop: 10,
      backgroundColor: Colors.warning,
      borderRadius: 6,
      flexDirection:'row',
      padding :15,
      alignItems:'center'
    },
    element: {
      color: "#fff",
      //padding: 20,
      fontSize: 17,
      //marginVertical: 6,
      marginLeft: 20,
    }
  });

export default Products;