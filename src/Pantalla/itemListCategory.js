import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

const ItemListCategories = () => {
    return (
      <View style={styles.container}>
        <Text>ItemListCategories</Text>
      </View>
    )
  }

export default ItemListCategories;  

