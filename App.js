import Home from "./src/Pantalla/home";
import { StyleSheet,  View, Text } from 'react-native';
/*import ItemListCategories from "./src/Pantalla/itemListCategory"
import ItemDetail from "./src/Pantalla/itemdetail"*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '340636',
    alignItems: 'center',
    justifyContent: 'start',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <Text>SUPLEMENTOS ALIMENTICIOS OMNILIFE</Text>
      <Home />
    </View>
  );
}

export default App


