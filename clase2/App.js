import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

//importamos el componente PokemonScreen que se encargará de mostrar la pantalla de los Pokémon
import WorkersScreen from './src/screens/WorkersScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi aplicación consumiendo datos desde una API</Text>
      <WorkersScreen />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 50,
    backgroundColor: "#791010",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 50,
  },
});