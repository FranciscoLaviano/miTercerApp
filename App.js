import Home from "./src/Pantalla/home";
import { StyleSheet,  View, Text } from 'react-native';
import ItemListCategories from "./src/Pantalla/itemListCategory"
import ItemDetail from "./src/Pantalla/itemdetail"
import { useState } from 'react'
import { useFonts } from "expo-font"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '340636',
    alignItems: 'center',
    justifyContent: 'start',
  },
})

const App = () => {

   const [categoriaElejida, setCategoriaElejida] = useState("")
   const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Bold.ttf")
   })
  if(!fontLoaded) return null

  return (
    <View style={styles.container}>
      {categoriaElejida ? <ItemListCategories categoria={categoriaElejida} />
      :
      <Home setCategoriaElejida={setCategoriaElejida} />
    }
      <Text>SUPLEMENTOS ALIMENTICIOS OMNILIFE</Text>
    </View>
  );
}

export default App


